import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:68
* @route '/courses/{course}/units/{unit}/exams'
*/
export const index = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/courses/{course}/units/{unit}/exams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:68
* @route '/courses/{course}/units/{unit}/exams'
*/
index.url = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            course: args[0],
            unit: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
        unit: typeof args.unit === 'object'
        ? args.unit.id
        : args.unit,
    }

    return index.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:68
* @route '/courses/{course}/units/{unit}/exams'
*/
index.get = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:68
* @route '/courses/{course}/units/{unit}/exams'
*/
index.head = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:68
* @route '/courses/{course}/units/{unit}/exams'
*/
const indexForm = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:68
* @route '/courses/{course}/units/{unit}/exams'
*/
indexForm.get = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::index
* @see app/Http/Controllers/ExamController.php:68
* @route '/courses/{course}/units/{unit}/exams'
*/
indexForm.head = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
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
* @route '/courses/{course}/units/{unit}/exams/create'
*/
export const create = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/courses/{course}/units/{unit}/exams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
create.url = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            course: args[0],
            unit: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
        unit: typeof args.unit === 'object'
        ? args.unit.id
        : args.unit,
    }

    return create.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
create.get = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
create.head = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
const createForm = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
createForm.get = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
createForm.head = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @route '/courses/{course}/units/{unit}/exams'
*/
export const store = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/courses/{course}/units/{unit}/exams',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/courses/{course}/units/{unit}/exams'
*/
store.url = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            course: args[0],
            unit: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
        unit: typeof args.unit === 'object'
        ? args.unit.id
        : args.unit,
    }

    return store.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/courses/{course}/units/{unit}/exams'
*/
store.post = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/courses/{course}/units/{unit}/exams'
*/
const storeForm = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/courses/{course}/units/{unit}/exams'
*/
storeForm.post = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
export const edit = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/courses/{course}/units/{unit}/exams/{exam}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
edit.url = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            course: args[0],
            unit: args[1],
            exam: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
        unit: typeof args.unit === 'object'
        ? args.unit.id
        : args.unit,
        exam: typeof args.exam === 'object'
        ? args.exam.id
        : args.exam,
    }

    return edit.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
edit.get = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
edit.head = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
const editForm = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
editForm.get = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
editForm.head = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
export const update = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/courses/{course}/units/{unit}/exams/{exam}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
update.url = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            course: args[0],
            unit: args[1],
            exam: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
        unit: typeof args.unit === 'object'
        ? args.unit.id
        : args.unit,
        exam: typeof args.exam === 'object'
        ? args.exam.id
        : args.exam,
    }

    return update.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
update.put = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
const updateForm = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
updateForm.put = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
export const destroy = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/courses/{course}/units/{unit}/exams/{exam}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
destroy.url = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            course: args[0],
            unit: args[1],
            exam: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
        unit: typeof args.unit === 'object'
        ? args.unit.id
        : args.unit,
        exam: typeof args.exam === 'object'
        ? args.exam.id
        : args.exam,
    }

    return destroy.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
destroy.delete = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
const destroyForm = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
destroyForm.delete = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default exams