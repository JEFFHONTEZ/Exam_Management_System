import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\TeacherController::index
* @see app/Http/Controllers/TeacherController.php:26
* @route '/teachers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/teachers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TeacherController::index
* @see app/Http/Controllers/TeacherController.php:26
* @route '/teachers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TeacherController::index
* @see app/Http/Controllers/TeacherController.php:26
* @route '/teachers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::index
* @see app/Http/Controllers/TeacherController.php:26
* @route '/teachers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TeacherController::index
* @see app/Http/Controllers/TeacherController.php:26
* @route '/teachers'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::index
* @see app/Http/Controllers/TeacherController.php:26
* @route '/teachers'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::index
* @see app/Http/Controllers/TeacherController.php:26
* @route '/teachers'
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
* @see \App\Http\Controllers\TeacherController::create
* @see app/Http/Controllers/TeacherController.php:63
* @route '/teachers/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/teachers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TeacherController::create
* @see app/Http/Controllers/TeacherController.php:63
* @route '/teachers/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TeacherController::create
* @see app/Http/Controllers/TeacherController.php:63
* @route '/teachers/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::create
* @see app/Http/Controllers/TeacherController.php:63
* @route '/teachers/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TeacherController::create
* @see app/Http/Controllers/TeacherController.php:63
* @route '/teachers/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::create
* @see app/Http/Controllers/TeacherController.php:63
* @route '/teachers/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::create
* @see app/Http/Controllers/TeacherController.php:63
* @route '/teachers/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\TeacherController::store
* @see app/Http/Controllers/TeacherController.php:71
* @route '/teachers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/teachers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TeacherController::store
* @see app/Http/Controllers/TeacherController.php:71
* @route '/teachers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TeacherController::store
* @see app/Http/Controllers/TeacherController.php:71
* @route '/teachers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TeacherController::store
* @see app/Http/Controllers/TeacherController.php:71
* @route '/teachers'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TeacherController::store
* @see app/Http/Controllers/TeacherController.php:71
* @route '/teachers'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\TeacherController::edit
* @see app/Http/Controllers/TeacherController.php:126
* @route '/teachers/{teacher}/edit'
*/
export const edit = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/teachers/{teacher}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TeacherController::edit
* @see app/Http/Controllers/TeacherController.php:126
* @route '/teachers/{teacher}/edit'
*/
edit.url = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { teacher: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { teacher: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            teacher: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        teacher: typeof args.teacher === 'object'
        ? args.teacher.id
        : args.teacher,
    }

    return edit.definition.url
            .replace('{teacher}', parsedArgs.teacher.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TeacherController::edit
* @see app/Http/Controllers/TeacherController.php:126
* @route '/teachers/{teacher}/edit'
*/
edit.get = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::edit
* @see app/Http/Controllers/TeacherController.php:126
* @route '/teachers/{teacher}/edit'
*/
edit.head = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TeacherController::edit
* @see app/Http/Controllers/TeacherController.php:126
* @route '/teachers/{teacher}/edit'
*/
const editForm = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::edit
* @see app/Http/Controllers/TeacherController.php:126
* @route '/teachers/{teacher}/edit'
*/
editForm.get = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::edit
* @see app/Http/Controllers/TeacherController.php:126
* @route '/teachers/{teacher}/edit'
*/
editForm.head = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\TeacherController::update
* @see app/Http/Controllers/TeacherController.php:152
* @route '/teachers/{teacher}'
*/
export const update = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/teachers/{teacher}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\TeacherController::update
* @see app/Http/Controllers/TeacherController.php:152
* @route '/teachers/{teacher}'
*/
update.url = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { teacher: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { teacher: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            teacher: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        teacher: typeof args.teacher === 'object'
        ? args.teacher.id
        : args.teacher,
    }

    return update.definition.url
            .replace('{teacher}', parsedArgs.teacher.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TeacherController::update
* @see app/Http/Controllers/TeacherController.php:152
* @route '/teachers/{teacher}'
*/
update.put = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\TeacherController::update
* @see app/Http/Controllers/TeacherController.php:152
* @route '/teachers/{teacher}'
*/
const updateForm = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TeacherController::update
* @see app/Http/Controllers/TeacherController.php:152
* @route '/teachers/{teacher}'
*/
updateForm.put = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\TeacherController::destroy
* @see app/Http/Controllers/TeacherController.php:219
* @route '/teachers/{teacher}'
*/
export const destroy = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/teachers/{teacher}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TeacherController::destroy
* @see app/Http/Controllers/TeacherController.php:219
* @route '/teachers/{teacher}'
*/
destroy.url = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { teacher: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { teacher: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            teacher: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        teacher: typeof args.teacher === 'object'
        ? args.teacher.id
        : args.teacher,
    }

    return destroy.definition.url
            .replace('{teacher}', parsedArgs.teacher.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TeacherController::destroy
* @see app/Http/Controllers/TeacherController.php:219
* @route '/teachers/{teacher}'
*/
destroy.delete = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\TeacherController::destroy
* @see app/Http/Controllers/TeacherController.php:219
* @route '/teachers/{teacher}'
*/
const destroyForm = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TeacherController::destroy
* @see app/Http/Controllers/TeacherController.php:219
* @route '/teachers/{teacher}'
*/
destroyForm.delete = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TeacherController::resetPassword
* @see app/Http/Controllers/TeacherController.php:209
* @route '/teachers/{teacher}/reset-password'
*/
export const resetPassword = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetPassword.url(args, options),
    method: 'post',
})

resetPassword.definition = {
    methods: ["post"],
    url: '/teachers/{teacher}/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TeacherController::resetPassword
* @see app/Http/Controllers/TeacherController.php:209
* @route '/teachers/{teacher}/reset-password'
*/
resetPassword.url = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { teacher: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { teacher: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            teacher: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        teacher: typeof args.teacher === 'object'
        ? args.teacher.id
        : args.teacher,
    }

    return resetPassword.definition.url
            .replace('{teacher}', parsedArgs.teacher.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TeacherController::resetPassword
* @see app/Http/Controllers/TeacherController.php:209
* @route '/teachers/{teacher}/reset-password'
*/
resetPassword.post = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetPassword.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TeacherController::resetPassword
* @see app/Http/Controllers/TeacherController.php:209
* @route '/teachers/{teacher}/reset-password'
*/
const resetPasswordForm = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resetPassword.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TeacherController::resetPassword
* @see app/Http/Controllers/TeacherController.php:209
* @route '/teachers/{teacher}/reset-password'
*/
resetPasswordForm.post = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resetPassword.url(args, options),
    method: 'post',
})

resetPassword.form = resetPasswordForm

/**
* @see \App\Http\Controllers\TeacherController::load
* @see app/Http/Controllers/TeacherController.php:225
* @route '/teachers/{teacher}/load-report'
*/
export const load = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: load.url(args, options),
    method: 'get',
})

load.definition = {
    methods: ["get","head"],
    url: '/teachers/{teacher}/load-report',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TeacherController::load
* @see app/Http/Controllers/TeacherController.php:225
* @route '/teachers/{teacher}/load-report'
*/
load.url = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { teacher: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { teacher: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            teacher: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        teacher: typeof args.teacher === 'object'
        ? args.teacher.id
        : args.teacher,
    }

    return load.definition.url
            .replace('{teacher}', parsedArgs.teacher.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TeacherController::load
* @see app/Http/Controllers/TeacherController.php:225
* @route '/teachers/{teacher}/load-report'
*/
load.get = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: load.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::load
* @see app/Http/Controllers/TeacherController.php:225
* @route '/teachers/{teacher}/load-report'
*/
load.head = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: load.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TeacherController::load
* @see app/Http/Controllers/TeacherController.php:225
* @route '/teachers/{teacher}/load-report'
*/
const loadForm = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: load.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::load
* @see app/Http/Controllers/TeacherController.php:225
* @route '/teachers/{teacher}/load-report'
*/
loadForm.get = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: load.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::load
* @see app/Http/Controllers/TeacherController.php:225
* @route '/teachers/{teacher}/load-report'
*/
loadForm.head = (args: { teacher: number | { id: number } } | [teacher: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: load.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

load.form = loadForm

const teachers = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    resetPassword: Object.assign(resetPassword, resetPassword),
    load: Object.assign(load, load),
}

export default teachers