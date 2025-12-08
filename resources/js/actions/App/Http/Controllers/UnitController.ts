import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UnitController::index
* @see app/Http/Controllers/UnitController.php:21
* @route '/courses/{course}/units'
*/
export const index = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/courses/{course}/units',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UnitController::index
* @see app/Http/Controllers/UnitController.php:21
* @route '/courses/{course}/units'
*/
index.url = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { course: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
    }

    return index.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UnitController::index
* @see app/Http/Controllers/UnitController.php:21
* @route '/courses/{course}/units'
*/
index.get = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UnitController::index
* @see app/Http/Controllers/UnitController.php:21
* @route '/courses/{course}/units'
*/
index.head = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UnitController::index
* @see app/Http/Controllers/UnitController.php:21
* @route '/courses/{course}/units'
*/
const indexForm = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UnitController::index
* @see app/Http/Controllers/UnitController.php:21
* @route '/courses/{course}/units'
*/
indexForm.get = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UnitController::index
* @see app/Http/Controllers/UnitController.php:21
* @route '/courses/{course}/units'
*/
indexForm.head = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\UnitController::create
* @see app/Http/Controllers/UnitController.php:58
* @route '/courses/{course}/units/create'
*/
export const create = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/courses/{course}/units/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UnitController::create
* @see app/Http/Controllers/UnitController.php:58
* @route '/courses/{course}/units/create'
*/
create.url = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { course: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
    }

    return create.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UnitController::create
* @see app/Http/Controllers/UnitController.php:58
* @route '/courses/{course}/units/create'
*/
create.get = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UnitController::create
* @see app/Http/Controllers/UnitController.php:58
* @route '/courses/{course}/units/create'
*/
create.head = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UnitController::create
* @see app/Http/Controllers/UnitController.php:58
* @route '/courses/{course}/units/create'
*/
const createForm = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UnitController::create
* @see app/Http/Controllers/UnitController.php:58
* @route '/courses/{course}/units/create'
*/
createForm.get = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UnitController::create
* @see app/Http/Controllers/UnitController.php:58
* @route '/courses/{course}/units/create'
*/
createForm.head = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\UnitController::store
* @see app/Http/Controllers/UnitController.php:75
* @route '/courses/{course}/units'
*/
export const store = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/courses/{course}/units',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UnitController::store
* @see app/Http/Controllers/UnitController.php:75
* @route '/courses/{course}/units'
*/
store.url = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { course: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
    }

    return store.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UnitController::store
* @see app/Http/Controllers/UnitController.php:75
* @route '/courses/{course}/units'
*/
store.post = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UnitController::store
* @see app/Http/Controllers/UnitController.php:75
* @route '/courses/{course}/units'
*/
const storeForm = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UnitController::store
* @see app/Http/Controllers/UnitController.php:75
* @route '/courses/{course}/units'
*/
storeForm.post = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\UnitController::edit
* @see app/Http/Controllers/UnitController.php:110
* @route '/courses/{course}/units/{unit}/edit'
*/
export const edit = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/courses/{course}/units/{unit}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UnitController::edit
* @see app/Http/Controllers/UnitController.php:110
* @route '/courses/{course}/units/{unit}/edit'
*/
edit.url = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UnitController::edit
* @see app/Http/Controllers/UnitController.php:110
* @route '/courses/{course}/units/{unit}/edit'
*/
edit.get = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UnitController::edit
* @see app/Http/Controllers/UnitController.php:110
* @route '/courses/{course}/units/{unit}/edit'
*/
edit.head = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UnitController::edit
* @see app/Http/Controllers/UnitController.php:110
* @route '/courses/{course}/units/{unit}/edit'
*/
const editForm = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UnitController::edit
* @see app/Http/Controllers/UnitController.php:110
* @route '/courses/{course}/units/{unit}/edit'
*/
editForm.get = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UnitController::edit
* @see app/Http/Controllers/UnitController.php:110
* @route '/courses/{course}/units/{unit}/edit'
*/
editForm.head = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\UnitController::update
* @see app/Http/Controllers/UnitController.php:123
* @route '/courses/{course}/units/{unit}'
*/
export const update = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/courses/{course}/units/{unit}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\UnitController::update
* @see app/Http/Controllers/UnitController.php:123
* @route '/courses/{course}/units/{unit}'
*/
update.url = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UnitController::update
* @see app/Http/Controllers/UnitController.php:123
* @route '/courses/{course}/units/{unit}'
*/
update.put = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\UnitController::update
* @see app/Http/Controllers/UnitController.php:123
* @route '/courses/{course}/units/{unit}'
*/
const updateForm = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UnitController::update
* @see app/Http/Controllers/UnitController.php:123
* @route '/courses/{course}/units/{unit}'
*/
updateForm.put = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\UnitController::destroy
* @see app/Http/Controllers/UnitController.php:153
* @route '/courses/{course}/units/{unit}'
*/
export const destroy = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/courses/{course}/units/{unit}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UnitController::destroy
* @see app/Http/Controllers/UnitController.php:153
* @route '/courses/{course}/units/{unit}'
*/
destroy.url = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UnitController::destroy
* @see app/Http/Controllers/UnitController.php:153
* @route '/courses/{course}/units/{unit}'
*/
destroy.delete = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UnitController::destroy
* @see app/Http/Controllers/UnitController.php:153
* @route '/courses/{course}/units/{unit}'
*/
const destroyForm = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UnitController::destroy
* @see app/Http/Controllers/UnitController.php:153
* @route '/courses/{course}/units/{unit}'
*/
destroyForm.delete = (args: { course: string | number | { id: string | number }, unit: string | number | { id: string | number } } | [course: string | number | { id: string | number }, unit: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const UnitController = { index, create, store, edit, update, destroy }

export default UnitController