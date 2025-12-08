import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::edit
* @see app/Http/Controllers/Admin/SystemSettingsController.php:22
* @route '/admin/system-settings'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/system-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::edit
* @see app/Http/Controllers/Admin/SystemSettingsController.php:22
* @route '/admin/system-settings'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::edit
* @see app/Http/Controllers/Admin/SystemSettingsController.php:22
* @route '/admin/system-settings'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::edit
* @see app/Http/Controllers/Admin/SystemSettingsController.php:22
* @route '/admin/system-settings'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::edit
* @see app/Http/Controllers/Admin/SystemSettingsController.php:22
* @route '/admin/system-settings'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::edit
* @see app/Http/Controllers/Admin/SystemSettingsController.php:22
* @route '/admin/system-settings'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::edit
* @see app/Http/Controllers/Admin/SystemSettingsController.php:22
* @route '/admin/system-settings'
*/
editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::update
* @see app/Http/Controllers/Admin/SystemSettingsController.php:39
* @route '/admin/system-settings'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/system-settings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::update
* @see app/Http/Controllers/Admin/SystemSettingsController.php:39
* @route '/admin/system-settings'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::update
* @see app/Http/Controllers/Admin/SystemSettingsController.php:39
* @route '/admin/system-settings'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::update
* @see app/Http/Controllers/Admin/SystemSettingsController.php:39
* @route '/admin/system-settings'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SystemSettingsController::update
* @see app/Http/Controllers/Admin/SystemSettingsController.php:39
* @route '/admin/system-settings'
*/
updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

update.form = updateForm

const SystemSettingsController = { edit, update }

export default SystemSettingsController