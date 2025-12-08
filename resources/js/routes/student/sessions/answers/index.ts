import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StudentExamController::bulk
* @see app/Http/Controllers/StudentExamController.php:140
* @route '/sessions/{session}/answers/bulk'
*/
export const bulk = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(args, options),
    method: 'post',
})

bulk.definition = {
    methods: ["post"],
    url: '/sessions/{session}/answers/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StudentExamController::bulk
* @see app/Http/Controllers/StudentExamController.php:140
* @route '/sessions/{session}/answers/bulk'
*/
bulk.url = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return bulk.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentExamController::bulk
* @see app/Http/Controllers/StudentExamController.php:140
* @route '/sessions/{session}/answers/bulk'
*/
bulk.post = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentExamController::bulk
* @see app/Http/Controllers/StudentExamController.php:140
* @route '/sessions/{session}/answers/bulk'
*/
const bulkForm = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulk.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentExamController::bulk
* @see app/Http/Controllers/StudentExamController.php:140
* @route '/sessions/{session}/answers/bulk'
*/
bulkForm.post = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulk.url(args, options),
    method: 'post',
})

bulk.form = bulkForm

const answers = {
    bulk: Object.assign(bulk, bulk),
}

export default answers