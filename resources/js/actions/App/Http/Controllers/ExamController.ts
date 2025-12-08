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
const create2e077c5d54e25841ca211ce5a27db906 = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create2e077c5d54e25841ca211ce5a27db906.url(args, options),
    method: 'get',
})

create2e077c5d54e25841ca211ce5a27db906.definition = {
    methods: ["get","head"],
    url: '/courses/{course}/units/{unit}/exams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
create2e077c5d54e25841ca211ce5a27db906.url = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return create2e077c5d54e25841ca211ce5a27db906.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
create2e077c5d54e25841ca211ce5a27db906.get = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create2e077c5d54e25841ca211ce5a27db906.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
create2e077c5d54e25841ca211ce5a27db906.head = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create2e077c5d54e25841ca211ce5a27db906.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
const create2e077c5d54e25841ca211ce5a27db906Form = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create2e077c5d54e25841ca211ce5a27db906.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
create2e077c5d54e25841ca211ce5a27db906Form.get = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create2e077c5d54e25841ca211ce5a27db906.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/courses/{course}/units/{unit}/exams/create'
*/
create2e077c5d54e25841ca211ce5a27db906Form.head = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create2e077c5d54e25841ca211ce5a27db906.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create2e077c5d54e25841ca211ce5a27db906.form = create2e077c5d54e25841ca211ce5a27db906Form
/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
const create4f1bb9e01cfc5696cb58179f5b77ee9a = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create4f1bb9e01cfc5696cb58179f5b77ee9a.url(args, options),
    method: 'get',
})

create4f1bb9e01cfc5696cb58179f5b77ee9a.definition = {
    methods: ["get","head"],
    url: '/exams/{exam}/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
create4f1bb9e01cfc5696cb58179f5b77ee9a.url = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return create4f1bb9e01cfc5696cb58179f5b77ee9a.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
create4f1bb9e01cfc5696cb58179f5b77ee9a.get = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create4f1bb9e01cfc5696cb58179f5b77ee9a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
create4f1bb9e01cfc5696cb58179f5b77ee9a.head = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create4f1bb9e01cfc5696cb58179f5b77ee9a.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
const create4f1bb9e01cfc5696cb58179f5b77ee9aForm = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create4f1bb9e01cfc5696cb58179f5b77ee9a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
create4f1bb9e01cfc5696cb58179f5b77ee9aForm.get = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create4f1bb9e01cfc5696cb58179f5b77ee9a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::create
* @see app/Http/Controllers/ExamController.php:111
* @route '/exams/{exam}/create'
*/
create4f1bb9e01cfc5696cb58179f5b77ee9aForm.head = (args: { exam: string | number } | [exam: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create4f1bb9e01cfc5696cb58179f5b77ee9a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create4f1bb9e01cfc5696cb58179f5b77ee9a.form = create4f1bb9e01cfc5696cb58179f5b77ee9aForm

export const create = {
    '/courses/{course}/units/{unit}/exams/create': create2e077c5d54e25841ca211ce5a27db906,
    '/exams/{exam}/create': create4f1bb9e01cfc5696cb58179f5b77ee9a,
}

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/courses/{course}/units/{unit}/exams'
*/
const store3701a7de375078dde9a0874e6426b2f8 = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3701a7de375078dde9a0874e6426b2f8.url(args, options),
    method: 'post',
})

store3701a7de375078dde9a0874e6426b2f8.definition = {
    methods: ["post"],
    url: '/courses/{course}/units/{unit}/exams',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/courses/{course}/units/{unit}/exams'
*/
store3701a7de375078dde9a0874e6426b2f8.url = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return store3701a7de375078dde9a0874e6426b2f8.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/courses/{course}/units/{unit}/exams'
*/
store3701a7de375078dde9a0874e6426b2f8.post = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3701a7de375078dde9a0874e6426b2f8.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/courses/{course}/units/{unit}/exams'
*/
const store3701a7de375078dde9a0874e6426b2f8Form = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store3701a7de375078dde9a0874e6426b2f8.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/courses/{course}/units/{unit}/exams'
*/
store3701a7de375078dde9a0874e6426b2f8Form.post = (args: { course: number | { id: number }, unit: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store3701a7de375078dde9a0874e6426b2f8.url(args, options),
    method: 'post',
})

store3701a7de375078dde9a0874e6426b2f8.form = store3701a7de375078dde9a0874e6426b2f8Form
/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/exams'
*/
const storec9826e925b05bcb8500da33aebdc903b = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec9826e925b05bcb8500da33aebdc903b.url(options),
    method: 'post',
})

storec9826e925b05bcb8500da33aebdc903b.definition = {
    methods: ["post"],
    url: '/exams',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/exams'
*/
storec9826e925b05bcb8500da33aebdc903b.url = (options?: RouteQueryOptions) => {
    return storec9826e925b05bcb8500da33aebdc903b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/exams'
*/
storec9826e925b05bcb8500da33aebdc903b.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec9826e925b05bcb8500da33aebdc903b.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/exams'
*/
const storec9826e925b05bcb8500da33aebdc903bForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec9826e925b05bcb8500da33aebdc903b.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExamController::store
* @see app/Http/Controllers/ExamController.php:128
* @route '/exams'
*/
storec9826e925b05bcb8500da33aebdc903bForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec9826e925b05bcb8500da33aebdc903b.url(options),
    method: 'post',
})

storec9826e925b05bcb8500da33aebdc903b.form = storec9826e925b05bcb8500da33aebdc903bForm

export const store = {
    '/courses/{course}/units/{unit}/exams': store3701a7de375078dde9a0874e6426b2f8,
    '/exams': storec9826e925b05bcb8500da33aebdc903b,
}

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
const editd177400f9ec63d579b4112f47a1fc207 = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editd177400f9ec63d579b4112f47a1fc207.url(args, options),
    method: 'get',
})

editd177400f9ec63d579b4112f47a1fc207.definition = {
    methods: ["get","head"],
    url: '/courses/{course}/units/{unit}/exams/{exam}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
editd177400f9ec63d579b4112f47a1fc207.url = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return editd177400f9ec63d579b4112f47a1fc207.definition.url
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
editd177400f9ec63d579b4112f47a1fc207.get = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editd177400f9ec63d579b4112f47a1fc207.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
editd177400f9ec63d579b4112f47a1fc207.head = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editd177400f9ec63d579b4112f47a1fc207.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
const editd177400f9ec63d579b4112f47a1fc207Form = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editd177400f9ec63d579b4112f47a1fc207.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
editd177400f9ec63d579b4112f47a1fc207Form.get = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editd177400f9ec63d579b4112f47a1fc207.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/courses/{course}/units/{unit}/exams/{exam}/edit'
*/
editd177400f9ec63d579b4112f47a1fc207Form.head = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editd177400f9ec63d579b4112f47a1fc207.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editd177400f9ec63d579b4112f47a1fc207.form = editd177400f9ec63d579b4112f47a1fc207Form
/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
const editd05d8ab053775ca10b82495f04931536 = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editd05d8ab053775ca10b82495f04931536.url(args, options),
    method: 'get',
})

editd05d8ab053775ca10b82495f04931536.definition = {
    methods: ["get","head"],
    url: '/exams/{exam}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
editd05d8ab053775ca10b82495f04931536.url = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return editd05d8ab053775ca10b82495f04931536.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
editd05d8ab053775ca10b82495f04931536.get = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editd05d8ab053775ca10b82495f04931536.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
editd05d8ab053775ca10b82495f04931536.head = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editd05d8ab053775ca10b82495f04931536.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
const editd05d8ab053775ca10b82495f04931536Form = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editd05d8ab053775ca10b82495f04931536.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
editd05d8ab053775ca10b82495f04931536Form.get = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editd05d8ab053775ca10b82495f04931536.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::edit
* @see app/Http/Controllers/ExamController.php:171
* @route '/exams/{exam}/edit'
*/
editd05d8ab053775ca10b82495f04931536Form.head = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editd05d8ab053775ca10b82495f04931536.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editd05d8ab053775ca10b82495f04931536.form = editd05d8ab053775ca10b82495f04931536Form

export const edit = {
    '/courses/{course}/units/{unit}/exams/{exam}/edit': editd177400f9ec63d579b4112f47a1fc207,
    '/exams/{exam}/edit': editd05d8ab053775ca10b82495f04931536,
}

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
const update57308b751156c613aaa3bb15670d7cfc = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update57308b751156c613aaa3bb15670d7cfc.url(args, options),
    method: 'put',
})

update57308b751156c613aaa3bb15670d7cfc.definition = {
    methods: ["put"],
    url: '/courses/{course}/units/{unit}/exams/{exam}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
update57308b751156c613aaa3bb15670d7cfc.url = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return update57308b751156c613aaa3bb15670d7cfc.definition.url
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
update57308b751156c613aaa3bb15670d7cfc.put = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update57308b751156c613aaa3bb15670d7cfc.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
const update57308b751156c613aaa3bb15670d7cfcForm = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update57308b751156c613aaa3bb15670d7cfc.url(args, {
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
update57308b751156c613aaa3bb15670d7cfcForm.put = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update57308b751156c613aaa3bb15670d7cfc.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update57308b751156c613aaa3bb15670d7cfc.form = update57308b751156c613aaa3bb15670d7cfcForm
/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/exams/{exam}'
*/
const updatee4d4df55d80a723efc4aee0e9b50ee5d = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatee4d4df55d80a723efc4aee0e9b50ee5d.url(args, options),
    method: 'put',
})

updatee4d4df55d80a723efc4aee0e9b50ee5d.definition = {
    methods: ["put"],
    url: '/exams/{exam}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/exams/{exam}'
*/
updatee4d4df55d80a723efc4aee0e9b50ee5d.url = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updatee4d4df55d80a723efc4aee0e9b50ee5d.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/exams/{exam}'
*/
updatee4d4df55d80a723efc4aee0e9b50ee5d.put = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatee4d4df55d80a723efc4aee0e9b50ee5d.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ExamController::update
* @see app/Http/Controllers/ExamController.php:188
* @route '/exams/{exam}'
*/
const updatee4d4df55d80a723efc4aee0e9b50ee5dForm = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatee4d4df55d80a723efc4aee0e9b50ee5d.url(args, {
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
updatee4d4df55d80a723efc4aee0e9b50ee5dForm.put = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatee4d4df55d80a723efc4aee0e9b50ee5d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatee4d4df55d80a723efc4aee0e9b50ee5d.form = updatee4d4df55d80a723efc4aee0e9b50ee5dForm

export const update = {
    '/courses/{course}/units/{unit}/exams/{exam}': update57308b751156c613aaa3bb15670d7cfc,
    '/exams/{exam}': updatee4d4df55d80a723efc4aee0e9b50ee5d,
}

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
const destroy57308b751156c613aaa3bb15670d7cfc = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy57308b751156c613aaa3bb15670d7cfc.url(args, options),
    method: 'delete',
})

destroy57308b751156c613aaa3bb15670d7cfc.definition = {
    methods: ["delete"],
    url: '/courses/{course}/units/{unit}/exams/{exam}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
destroy57308b751156c613aaa3bb15670d7cfc.url = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return destroy57308b751156c613aaa3bb15670d7cfc.definition.url
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
destroy57308b751156c613aaa3bb15670d7cfc.delete = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy57308b751156c613aaa3bb15670d7cfc.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/courses/{course}/units/{unit}/exams/{exam}'
*/
const destroy57308b751156c613aaa3bb15670d7cfcForm = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy57308b751156c613aaa3bb15670d7cfc.url(args, {
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
destroy57308b751156c613aaa3bb15670d7cfcForm.delete = (args: { course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, unit: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy57308b751156c613aaa3bb15670d7cfc.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy57308b751156c613aaa3bb15670d7cfc.form = destroy57308b751156c613aaa3bb15670d7cfcForm
/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/exams/{exam}'
*/
const destroye4d4df55d80a723efc4aee0e9b50ee5d = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroye4d4df55d80a723efc4aee0e9b50ee5d.url(args, options),
    method: 'delete',
})

destroye4d4df55d80a723efc4aee0e9b50ee5d.definition = {
    methods: ["delete"],
    url: '/exams/{exam}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/exams/{exam}'
*/
destroye4d4df55d80a723efc4aee0e9b50ee5d.url = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroye4d4df55d80a723efc4aee0e9b50ee5d.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/exams/{exam}'
*/
destroye4d4df55d80a723efc4aee0e9b50ee5d.delete = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroye4d4df55d80a723efc4aee0e9b50ee5d.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ExamController::destroy
* @see app/Http/Controllers/ExamController.php:229
* @route '/exams/{exam}'
*/
const destroye4d4df55d80a723efc4aee0e9b50ee5dForm = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroye4d4df55d80a723efc4aee0e9b50ee5d.url(args, {
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
destroye4d4df55d80a723efc4aee0e9b50ee5dForm.delete = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroye4d4df55d80a723efc4aee0e9b50ee5d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroye4d4df55d80a723efc4aee0e9b50ee5d.form = destroye4d4df55d80a723efc4aee0e9b50ee5dForm

export const destroy = {
    '/courses/{course}/units/{unit}/exams/{exam}': destroy57308b751156c613aaa3bb15670d7cfc,
    '/exams/{exam}': destroye4d4df55d80a723efc4aee0e9b50ee5d,
}

/**
* @see \App\Http\Controllers\ExamController::allExamsIndex
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
export const allExamsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: allExamsIndex.url(options),
    method: 'get',
})

allExamsIndex.definition = {
    methods: ["get","head"],
    url: '/exams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExamController::allExamsIndex
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
allExamsIndex.url = (options?: RouteQueryOptions) => {
    return allExamsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExamController::allExamsIndex
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
allExamsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: allExamsIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::allExamsIndex
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
allExamsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: allExamsIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExamController::allExamsIndex
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
const allExamsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: allExamsIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::allExamsIndex
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
allExamsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: allExamsIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExamController::allExamsIndex
* @see app/Http/Controllers/ExamController.php:21
* @route '/exams'
*/
allExamsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: allExamsIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

allExamsIndex.form = allExamsIndexForm

const ExamController = { index, create, store, edit, update, destroy, allExamsIndex }

export default ExamController