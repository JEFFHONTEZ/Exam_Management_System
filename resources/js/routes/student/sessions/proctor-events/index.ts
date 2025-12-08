import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProctorEventController::store
* @see app/Http/Controllers/ProctorEventController.php:12
* @route '/sessions/{session}/proctor-events'
*/
export const store = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/sessions/{session}/proctor-events',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProctorEventController::store
* @see app/Http/Controllers/ProctorEventController.php:12
* @route '/sessions/{session}/proctor-events'
*/
store.url = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { session: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { session: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            session: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        session: typeof args.session === 'object'
        ? args.session.id
        : args.session,
    }

    return store.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProctorEventController::store
* @see app/Http/Controllers/ProctorEventController.php:12
* @route '/sessions/{session}/proctor-events'
*/
store.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProctorEventController::store
* @see app/Http/Controllers/ProctorEventController.php:12
* @route '/sessions/{session}/proctor-events'
*/
const storeForm = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProctorEventController::store
* @see app/Http/Controllers/ProctorEventController.php:12
* @route '/sessions/{session}/proctor-events'
*/
storeForm.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const proctorEvents = {
    store: Object.assign(store, store),
}

export default proctorEvents