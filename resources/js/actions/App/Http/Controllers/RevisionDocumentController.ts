import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:19
* @route '/revision'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/revision',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:19
* @route '/revision'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:19
* @route '/revision'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:19
* @route '/revision'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:19
* @route '/revision'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:19
* @route '/revision'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::index
* @see app/Http/Controllers/RevisionDocumentController.php:19
* @route '/revision'
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

/**
* @see \App\Http\Controllers\RevisionDocumentController::store
* @see app/Http/Controllers/RevisionDocumentController.php:54
* @route '/revision'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/revision',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RevisionDocumentController::store
* @see app/Http/Controllers/RevisionDocumentController.php:54
* @route '/revision'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RevisionDocumentController::store
* @see app/Http/Controllers/RevisionDocumentController.php:54
* @route '/revision'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::store
* @see app/Http/Controllers/RevisionDocumentController.php:54
* @route '/revision'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::store
* @see app/Http/Controllers/RevisionDocumentController.php:54
* @route '/revision'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\RevisionDocumentController::destroy
* @see app/Http/Controllers/RevisionDocumentController.php:96
* @route '/revision/{document}'
*/
export const destroy = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/revision/{document}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\RevisionDocumentController::destroy
* @see app/Http/Controllers/RevisionDocumentController.php:96
* @route '/revision/{document}'
*/
destroy.url = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { document: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.id
        : args.document,
    }

    return destroy.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RevisionDocumentController::destroy
* @see app/Http/Controllers/RevisionDocumentController.php:96
* @route '/revision/{document}'
*/
destroy.delete = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::destroy
* @see app/Http/Controllers/RevisionDocumentController.php:96
* @route '/revision/{document}'
*/
const destroyForm = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::destroy
* @see app/Http/Controllers/RevisionDocumentController.php:96
* @route '/revision/{document}'
*/
destroyForm.delete = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\RevisionDocumentController::studentIndex
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
export const studentIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: studentIndex.url(options),
    method: 'get',
})

studentIndex.definition = {
    methods: ["get","head"],
    url: '/student/revision',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RevisionDocumentController::studentIndex
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
studentIndex.url = (options?: RouteQueryOptions) => {
    return studentIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RevisionDocumentController::studentIndex
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
studentIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: studentIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::studentIndex
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
studentIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: studentIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::studentIndex
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
const studentIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: studentIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::studentIndex
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
studentIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: studentIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::studentIndex
* @see app/Http/Controllers/RevisionDocumentController.php:110
* @route '/student/revision'
*/
studentIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: studentIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

studentIndex.form = studentIndexForm

/**
* @see \App\Http\Controllers\RevisionDocumentController::download
* @see app/Http/Controllers/RevisionDocumentController.php:138
* @route '/revision/{document}/download'
*/
export const download = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/revision/{document}/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RevisionDocumentController::download
* @see app/Http/Controllers/RevisionDocumentController.php:138
* @route '/revision/{document}/download'
*/
download.url = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { document: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.id
        : args.document,
    }

    return download.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RevisionDocumentController::download
* @see app/Http/Controllers/RevisionDocumentController.php:138
* @route '/revision/{document}/download'
*/
download.get = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::download
* @see app/Http/Controllers/RevisionDocumentController.php:138
* @route '/revision/{document}/download'
*/
download.head = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::download
* @see app/Http/Controllers/RevisionDocumentController.php:138
* @route '/revision/{document}/download'
*/
const downloadForm = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::download
* @see app/Http/Controllers/RevisionDocumentController.php:138
* @route '/revision/{document}/download'
*/
downloadForm.get = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::download
* @see app/Http/Controllers/RevisionDocumentController.php:138
* @route '/revision/{document}/download'
*/
downloadForm.head = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

/**
* @see \App\Http\Controllers\RevisionDocumentController::view
* @see app/Http/Controllers/RevisionDocumentController.php:151
* @route '/revision/{document}/view'
*/
export const view = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/revision/{document}/view',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RevisionDocumentController::view
* @see app/Http/Controllers/RevisionDocumentController.php:151
* @route '/revision/{document}/view'
*/
view.url = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { document: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.id
        : args.document,
    }

    return view.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RevisionDocumentController::view
* @see app/Http/Controllers/RevisionDocumentController.php:151
* @route '/revision/{document}/view'
*/
view.get = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::view
* @see app/Http/Controllers/RevisionDocumentController.php:151
* @route '/revision/{document}/view'
*/
view.head = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::view
* @see app/Http/Controllers/RevisionDocumentController.php:151
* @route '/revision/{document}/view'
*/
const viewForm = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::view
* @see app/Http/Controllers/RevisionDocumentController.php:151
* @route '/revision/{document}/view'
*/
viewForm.get = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RevisionDocumentController::view
* @see app/Http/Controllers/RevisionDocumentController.php:151
* @route '/revision/{document}/view'
*/
viewForm.head = (args: { document: number | { id: number } } | [document: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

const RevisionDocumentController = { index, store, destroy, studentIndex, download, view }

export default RevisionDocumentController