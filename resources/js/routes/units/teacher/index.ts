import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:261
* @route '/units/{unit}/teacher-assignments'
*/
export const assignments = (args: { unit: string | number | { id: string | number } } | [unit: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: assignments.url(args, options),
    method: 'get',
})

assignments.definition = {
    methods: ["get","head"],
    url: '/units/{unit}/teacher-assignments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:261
* @route '/units/{unit}/teacher-assignments'
*/
assignments.url = (args: { unit: string | number | { id: string | number } } | [unit: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { unit: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { unit: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            unit: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        unit: typeof args.unit === 'object'
        ? args.unit.id
        : args.unit,
    }

    return assignments.definition.url
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:261
* @route '/units/{unit}/teacher-assignments'
*/
assignments.get = (args: { unit: string | number | { id: string | number } } | [unit: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: assignments.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:261
* @route '/units/{unit}/teacher-assignments'
*/
assignments.head = (args: { unit: string | number | { id: string | number } } | [unit: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: assignments.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:261
* @route '/units/{unit}/teacher-assignments'
*/
const assignmentsForm = (args: { unit: string | number | { id: string | number } } | [unit: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: assignments.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:261
* @route '/units/{unit}/teacher-assignments'
*/
assignmentsForm.get = (args: { unit: string | number | { id: string | number } } | [unit: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: assignments.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:261
* @route '/units/{unit}/teacher-assignments'
*/
assignmentsForm.head = (args: { unit: string | number | { id: string | number } } | [unit: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: assignments.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

assignments.form = assignmentsForm

const teacher = {
    assignments: Object.assign(assignments, assignments),
}

export default teacher