import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/student/revision',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
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

const revision = {
    index: Object.assign(index, index),
}

export default revision