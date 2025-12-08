import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\QuestionController::index
* @see app/Http/Controllers/QuestionController.php:10
* @route '/exams/{exam}/questions'
*/
export const index = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/exams/{exam}/questions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuestionController::index
* @see app/Http/Controllers/QuestionController.php:10
* @route '/exams/{exam}/questions'
*/
index.url = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::index
* @see app/Http/Controllers/QuestionController.php:10
* @route '/exams/{exam}/questions'
*/
index.get = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuestionController::index
* @see app/Http/Controllers/QuestionController.php:10
* @route '/exams/{exam}/questions'
*/
index.head = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\QuestionController::index
* @see app/Http/Controllers/QuestionController.php:10
* @route '/exams/{exam}/questions'
*/
const indexForm = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuestionController::index
* @see app/Http/Controllers/QuestionController.php:10
* @route '/exams/{exam}/questions'
*/
indexForm.get = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuestionController::index
* @see app/Http/Controllers/QuestionController.php:10
* @route '/exams/{exam}/questions'
*/
indexForm.head = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\QuestionController::create
* @see app/Http/Controllers/QuestionController.php:32
* @route '/exams/{exam}/questions/create'
*/
export const create = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/exams/{exam}/questions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuestionController::create
* @see app/Http/Controllers/QuestionController.php:32
* @route '/exams/{exam}/questions/create'
*/
create.url = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::create
* @see app/Http/Controllers/QuestionController.php:32
* @route '/exams/{exam}/questions/create'
*/
create.get = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuestionController::create
* @see app/Http/Controllers/QuestionController.php:32
* @route '/exams/{exam}/questions/create'
*/
create.head = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\QuestionController::create
* @see app/Http/Controllers/QuestionController.php:32
* @route '/exams/{exam}/questions/create'
*/
const createForm = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuestionController::create
* @see app/Http/Controllers/QuestionController.php:32
* @route '/exams/{exam}/questions/create'
*/
createForm.get = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuestionController::create
* @see app/Http/Controllers/QuestionController.php:32
* @route '/exams/{exam}/questions/create'
*/
createForm.head = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\QuestionController::store
* @see app/Http/Controllers/QuestionController.php:51
* @route '/exams/{exam}/questions'
*/
export const store = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/exams/{exam}/questions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\QuestionController::store
* @see app/Http/Controllers/QuestionController.php:51
* @route '/exams/{exam}/questions'
*/
store.url = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::store
* @see app/Http/Controllers/QuestionController.php:51
* @route '/exams/{exam}/questions'
*/
store.post = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\QuestionController::store
* @see app/Http/Controllers/QuestionController.php:51
* @route '/exams/{exam}/questions'
*/
const storeForm = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\QuestionController::store
* @see app/Http/Controllers/QuestionController.php:51
* @route '/exams/{exam}/questions'
*/
storeForm.post = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\QuestionController::edit
* @see app/Http/Controllers/QuestionController.php:93
* @route '/exams/{exam}/questions/{question}/edit'
*/
export const edit = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/exams/{exam}/questions/{question}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuestionController::edit
* @see app/Http/Controllers/QuestionController.php:93
* @route '/exams/{exam}/questions/{question}/edit'
*/
edit.url = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            exam: args[0],
            question: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        exam: typeof args.exam === 'object'
        ? args.exam.id
        : args.exam,
        question: typeof args.question === 'object'
        ? args.question.id
        : args.question,
    }

    return edit.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace('{question}', parsedArgs.question.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::edit
* @see app/Http/Controllers/QuestionController.php:93
* @route '/exams/{exam}/questions/{question}/edit'
*/
edit.get = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuestionController::edit
* @see app/Http/Controllers/QuestionController.php:93
* @route '/exams/{exam}/questions/{question}/edit'
*/
edit.head = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\QuestionController::edit
* @see app/Http/Controllers/QuestionController.php:93
* @route '/exams/{exam}/questions/{question}/edit'
*/
const editForm = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuestionController::edit
* @see app/Http/Controllers/QuestionController.php:93
* @route '/exams/{exam}/questions/{question}/edit'
*/
editForm.get = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuestionController::edit
* @see app/Http/Controllers/QuestionController.php:93
* @route '/exams/{exam}/questions/{question}/edit'
*/
editForm.head = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\QuestionController::update
* @see app/Http/Controllers/QuestionController.php:118
* @route '/exams/{exam}/questions/{question}'
*/
export const update = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/exams/{exam}/questions/{question}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\QuestionController::update
* @see app/Http/Controllers/QuestionController.php:118
* @route '/exams/{exam}/questions/{question}'
*/
update.url = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            exam: args[0],
            question: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        exam: typeof args.exam === 'object'
        ? args.exam.id
        : args.exam,
        question: typeof args.question === 'object'
        ? args.question.id
        : args.question,
    }

    return update.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace('{question}', parsedArgs.question.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::update
* @see app/Http/Controllers/QuestionController.php:118
* @route '/exams/{exam}/questions/{question}'
*/
update.put = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\QuestionController::update
* @see app/Http/Controllers/QuestionController.php:118
* @route '/exams/{exam}/questions/{question}'
*/
const updateForm = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\QuestionController::update
* @see app/Http/Controllers/QuestionController.php:118
* @route '/exams/{exam}/questions/{question}'
*/
updateForm.put = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\QuestionController::destroy
* @see app/Http/Controllers/QuestionController.php:166
* @route '/exams/{exam}/questions/{question}'
*/
export const destroy = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/exams/{exam}/questions/{question}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\QuestionController::destroy
* @see app/Http/Controllers/QuestionController.php:166
* @route '/exams/{exam}/questions/{question}'
*/
destroy.url = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            exam: args[0],
            question: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        exam: typeof args.exam === 'object'
        ? args.exam.id
        : args.exam,
        question: typeof args.question === 'object'
        ? args.question.id
        : args.question,
    }

    return destroy.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace('{question}', parsedArgs.question.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::destroy
* @see app/Http/Controllers/QuestionController.php:166
* @route '/exams/{exam}/questions/{question}'
*/
destroy.delete = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\QuestionController::destroy
* @see app/Http/Controllers/QuestionController.php:166
* @route '/exams/{exam}/questions/{question}'
*/
const destroyForm = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\QuestionController::destroy
* @see app/Http/Controllers/QuestionController.php:166
* @route '/exams/{exam}/questions/{question}'
*/
destroyForm.delete = (args: { exam: string | number | { id: string | number }, question: string | number | { id: string | number } } | [exam: string | number | { id: string | number }, question: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const QuestionController = { index, create, store, edit, update, destroy }

export default QuestionController