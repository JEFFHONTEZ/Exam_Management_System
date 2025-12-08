<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use App\Models\User;

class LoginRequest extends FormRequest
{
    // ... (keep authorize and rules methods as they are)
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'login' => ['required', 'string'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @param string|null $requiredRole The role required for this login attempt
     * @throws \Illuminate\Validation\ValidationException
     */
    public function validateCredentials(?string $requiredRole = null)
    {
        $this->ensureIsNotRateLimited();

        $login = $this->input('login');
        $fieldType = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        // 1. Verify Password first
        if (! Auth::validate([$fieldType => $login, 'password' => $this->input('password')])) {
            RateLimiter::hit($this->throttleKey());
            throw ValidationException::withMessages([
                'login' => trans('auth.failed'),
            ]);
        }

        // 2. Retrieve User
        $user = User::where($fieldType, $login)->first();

        // 3. Verify Role (If a specific role page was used)
        if ($requiredRole) {
            // Using your existing helper method from User.php
            if (! $user->hasRole($requiredRole)) {
                RateLimiter::hit($this->throttleKey());

                throw ValidationException::withMessages([
                    'login' => "Access denied. This account does not have {$requiredRole} privileges.",
                ]);
            }
        }

        RateLimiter::clear($this->throttleKey());

        return $user;
    }

    // ... (keep ensureIsNotRateLimited and throttleKey methods)
    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }
        event(new Lockout($this));
        $seconds = RateLimiter::availableIn($this->throttleKey());
        throw ValidationException::withMessages([
            'login' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->input('login')) . '|' . $this->ip());
    }
}
