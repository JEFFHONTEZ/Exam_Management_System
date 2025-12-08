import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::admin
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
export const admin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})

admin.definition = {
    methods: ["get","head"],
    url: '/super-secret-login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::admin
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
admin.url = (options?: RouteQueryOptions) => {
    return admin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::admin
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
admin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::admin
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
admin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::admin
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
const adminForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::admin
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
adminForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::admin
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
* @route '/super-secret-login'
*/
adminForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

admin.form = adminForm

/**
* @see routes/auth.php:27
* @route '/login'
*/
export const generic = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generic.url(options),
    method: 'get',
})

generic.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/auth.php:27
* @route '/login'
*/
generic.url = (options?: RouteQueryOptions) => {
    return generic.definition.url + queryParams(options)
}

/**
* @see routes/auth.php:27
* @route '/login'
*/
generic.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generic.url(options),
    method: 'get',
})

/**
* @see routes/auth.php:27
* @route '/login'
*/
generic.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generic.url(options),
    method: 'head',
})

/**
* @see routes/auth.php:27
* @route '/login'
*/
const genericForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generic.url(options),
    method: 'get',
})

/**
* @see routes/auth.php:27
* @route '/login'
*/
genericForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generic.url(options),
    method: 'get',
})

/**
* @see routes/auth.php:27
* @route '/login'
*/
genericForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generic.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

generic.form = genericForm

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login/{role?}'
*/
export const store = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/login/{role?}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login/{role?}'
*/
store.url = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{role?}', parsedArgs.role?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login/{role?}'
*/
store.post = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login/{role?}'
*/
const storeForm = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login/{role?}'
*/
storeForm.post = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const login = {
    store: Object.assign(store, store),
}

export default login