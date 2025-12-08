import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
const create8a940bd0b40815eabd88c5e049817f4a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create8a940bd0b40815eabd88c5e049817f4a.url(options),
    method: 'get',
})

create8a940bd0b40815eabd88c5e049817f4a.definition = {
    methods: ["get","head"],
    url: '/super-secret-login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
create8a940bd0b40815eabd88c5e049817f4a.url = (options?: RouteQueryOptions) => {
    return create8a940bd0b40815eabd88c5e049817f4a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
create8a940bd0b40815eabd88c5e049817f4a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create8a940bd0b40815eabd88c5e049817f4a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
create8a940bd0b40815eabd88c5e049817f4a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create8a940bd0b40815eabd88c5e049817f4a.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
const create8a940bd0b40815eabd88c5e049817f4aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create8a940bd0b40815eabd88c5e049817f4a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
create8a940bd0b40815eabd88c5e049817f4aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create8a940bd0b40815eabd88c5e049817f4a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
create8a940bd0b40815eabd88c5e049817f4aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create8a940bd0b40815eabd88c5e049817f4a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create8a940bd0b40815eabd88c5e049817f4a.form = create8a940bd0b40815eabd88c5e049817f4aForm
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/login/{role?}'
*/
const create8062382916d741cbf97971cfe2cc399a = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create8062382916d741cbf97971cfe2cc399a.url(args, options),
    method: 'get',
})

create8062382916d741cbf97971cfe2cc399a.definition = {
    methods: ["get","head"],
    url: '/login/{role?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/login/{role?}'
*/
create8062382916d741cbf97971cfe2cc399a.url = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    if (Array.isArray(args)) {
        args = {
            role: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "role",
    ])

    const parsedArgs = {
        role: args?.role,
    }

    return create8062382916d741cbf97971cfe2cc399a.definition.url
            .replace('{role?}', parsedArgs.role?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/login/{role?}'
*/
create8062382916d741cbf97971cfe2cc399a.get = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create8062382916d741cbf97971cfe2cc399a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/login/{role?}'
*/
create8062382916d741cbf97971cfe2cc399a.head = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create8062382916d741cbf97971cfe2cc399a.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/login/{role?}'
*/
const create8062382916d741cbf97971cfe2cc399aForm = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create8062382916d741cbf97971cfe2cc399a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/login/{role?}'
*/
create8062382916d741cbf97971cfe2cc399aForm.get = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create8062382916d741cbf97971cfe2cc399a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/login/{role?}'
*/
create8062382916d741cbf97971cfe2cc399aForm.head = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create8062382916d741cbf97971cfe2cc399a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create8062382916d741cbf97971cfe2cc399a.form = create8062382916d741cbf97971cfe2cc399aForm

export const create = {
    '/super-secret-login': create8a940bd0b40815eabd88c5e049817f4a,
    '/login/{role?}': create8062382916d741cbf97971cfe2cc399a,
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/super-secret-login-v2'
*/
const store38a037609d6fb8ac56b2e362316060fc = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store38a037609d6fb8ac56b2e362316060fc.url(options),
    method: 'post',
})

store38a037609d6fb8ac56b2e362316060fc.definition = {
    methods: ["post"],
    url: '/super-secret-login-v2',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/super-secret-login-v2'
*/
store38a037609d6fb8ac56b2e362316060fc.url = (options?: RouteQueryOptions) => {
    return store38a037609d6fb8ac56b2e362316060fc.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/super-secret-login-v2'
*/
store38a037609d6fb8ac56b2e362316060fc.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store38a037609d6fb8ac56b2e362316060fc.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/super-secret-login-v2'
*/
const store38a037609d6fb8ac56b2e362316060fcForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store38a037609d6fb8ac56b2e362316060fc.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/super-secret-login-v2'
*/
store38a037609d6fb8ac56b2e362316060fcForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store38a037609d6fb8ac56b2e362316060fc.url(options),
    method: 'post',
})

store38a037609d6fb8ac56b2e362316060fc.form = store38a037609d6fb8ac56b2e362316060fcForm
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login/{role?}'
*/
const store8062382916d741cbf97971cfe2cc399a = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8062382916d741cbf97971cfe2cc399a.url(args, options),
    method: 'post',
})

store8062382916d741cbf97971cfe2cc399a.definition = {
    methods: ["post"],
    url: '/login/{role?}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login/{role?}'
*/
store8062382916d741cbf97971cfe2cc399a.url = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    if (Array.isArray(args)) {
        args = {
            role: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "role",
    ])

    const parsedArgs = {
        role: args?.role,
    }

    return store8062382916d741cbf97971cfe2cc399a.definition.url
            .replace('{role?}', parsedArgs.role?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login/{role?}'
*/
store8062382916d741cbf97971cfe2cc399a.post = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8062382916d741cbf97971cfe2cc399a.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login/{role?}'
*/
const store8062382916d741cbf97971cfe2cc399aForm = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8062382916d741cbf97971cfe2cc399a.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login/{role?}'
*/
store8062382916d741cbf97971cfe2cc399aForm.post = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8062382916d741cbf97971cfe2cc399a.url(args, options),
    method: 'post',
})

store8062382916d741cbf97971cfe2cc399a.form = store8062382916d741cbf97971cfe2cc399aForm

export const store = {
    '/super-secret-login-v2': store38a037609d6fb8ac56b2e362316060fc,
    '/login/{role?}': store8062382916d741cbf97971cfe2cc399a,
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:58
* @route '/logout'
*/
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(options),
    method: 'post',
})

destroy.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:58
* @route '/logout'
*/
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:58
* @route '/logout'
*/
destroy.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:58
* @route '/logout'
*/
const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:58
* @route '/logout'
*/
destroyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(options),
    method: 'post',
})

destroy.form = destroyForm

const AuthenticatedSessionController = { create, store, destroy }

export default AuthenticatedSessionController