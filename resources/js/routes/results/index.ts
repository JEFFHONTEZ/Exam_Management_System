import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
export const verify = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(options),
    method: 'get',
})

verify.definition = {
    methods: ["get","head"],
    url: '/results/verify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
verify.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
verify.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verify.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
const verifyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
verifyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
verifyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

verify.form = verifyForm

const results = {
    verify: Object.assign(verify, verify),
}

export default results