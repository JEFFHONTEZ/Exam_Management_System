import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import questions from './questions'
/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/exams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
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
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
export const create = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/exams/{exam}/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
create.url = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { exam: args }
    }

    if (Array.isArray(args)) {
        args = {
            exam: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        exam: args.exam,
    }

    return create.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
create.get = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
create.head = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
const createForm = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
createForm.get = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
createForm.head = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/exams'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/exams',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/exams'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/exams'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/exams'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/exams'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
export const edit = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/exams/{exam}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
edit.url = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { exam: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { exam: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            exam: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        exam: typeof args.exam === 'object'
        ? args.exam.id
        : args.exam,
    }

    return edit.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
edit.get = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
edit.head = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
const editForm = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
editForm.get = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
editForm.head = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/exams/{exam}'
*/
export const update = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/exams/{exam}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/exams/{exam}'
*/
update.url = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { exam: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { exam: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            exam: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        exam: typeof args.exam === 'object'
        ? args.exam.id
        : args.exam,
    }

    return update.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/exams/{exam}'
*/
update.put = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/exams/{exam}'
*/
const updateForm = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/exams/{exam}'
*/
updateForm.put = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/exams/{exam}'
*/
export const destroy = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/exams/{exam}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/exams/{exam}'
*/
destroy.url = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { exam: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { exam: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            exam: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        exam: typeof args.exam === 'object'
        ? args.exam.id
        : args.exam,
    }

    return destroy.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/exams/{exam}'
*/
destroy.delete = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/exams/{exam}'
*/
const destroyForm = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/exams/{exam}'
*/
destroyForm.delete = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const exams = {
    questions: Object.assign(questions, questions),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default exams