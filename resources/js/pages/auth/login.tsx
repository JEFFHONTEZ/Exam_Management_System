import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { request } from '@/routes/password'; // Ensure this path is correct in your project
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

// REMOVED: import { route } from 'ziggy-js'; (Not needed for this fix)

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    loginRole?: string;
}

export default function Login({
    status,
    canResetPassword,
    loginRole,
}: LoginProps) {
    const roleTitle = loginRole
        ? `${loginRole.charAt(0).toUpperCase() + loginRole.slice(1)} Login`
        : 'Log in to your account';

    const { data, setData, post, processing, errors, reset } = useForm({
        login: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // FIX: Manually construct the URL to avoid 'route is not defined' errors
        const url = loginRole ? `/login/${loginRole}` : '/login';

        post(url, {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout
            title={roleTitle}
            description={`Enter your ${loginRole ? loginRole + ' ' : ''}credentials below to log in`}
        >
            <Head title={roleTitle} />

            <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="login">
                            {loginRole === 'student'
                                ? 'Registration Number'
                                : 'Username or Email'}
                        </Label>
                        <Input
                            id="login"
                            type="text"
                            name="login"
                            value={data.login}
                            onChange={(e) => setData('login', e.target.value)}
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="username"
                            placeholder={
                                loginRole === 'student'
                                    ? 'e.g. EDS/123/00'
                                    : 'Username or Email'
                            }
                        />
                        <InputError message={errors.login} />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            {canResetPassword && (
                                <TextLink
                                    // If request() is giving errors, replace with simple string: "/forgot-password"
                                    href={
                                        typeof request === 'function'
                                            ? request()
                                            : '/forgot-password'
                                    }
                                    className="ml-auto text-sm"
                                    tabIndex={5}
                                >
                                    Forgot password?
                                </TextLink>
                            )}
                        </div>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            required
                            tabIndex={2}
                            autoComplete="current-password"
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onCheckedChange={(checked) =>
                                setData('remember', !!checked)
                            }
                            tabIndex={3}
                        />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>

                    <Button
                        type="submit"
                        className="mt-4 w-full"
                        tabIndex={4}
                        disabled={processing}
                        data-test="login-button"
                    >
                        {processing && (
                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Log in
                    </Button>
                </div>
            </form>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </AuthLayout>
    );
}
