import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ProctoringEventController::index
* @see app/Http/Controllers/Admin/ProctoringEventController.php:13
* @route '/admin/proctor/events'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/proctor/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProctoringEventController::index
* @see app/Http/Controllers/Admin/ProctoringEventController.php:13
* @route '/admin/proctor/events'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProctoringEventController::index
* @see app/Http/Controllers/Admin/ProctoringEventController.php:13
* @route '/admin/proctor/events'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ProctoringEventController::index
* @see app/Http/Controllers/Admin/ProctoringEventController.php:13
* @route '/admin/proctor/events'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ProctoringEventController::index
* @see app/Http/Controllers/Admin/ProctoringEventController.php:13
* @route '/admin/proctor/events'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ProctoringEventController::index
* @see app/Http/Controllers/Admin/ProctoringEventController.php:13
* @route '/admin/proctor/events'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ProctoringEventController::index
* @see app/Http/Controllers/Admin/ProctoringEventController.php:13
* @route '/admin/proctor/events'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const ProctoringEventController = { index }

export default ProctoringEventController