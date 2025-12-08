import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:244
* @route '/courses/{course}/teacher-assignments'
*/
export const assignments = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: assignments.url(args, options),
    method: 'get',
})

assignments.definition = {
    methods: ["get","head"],
    url: '/courses/{course}/teacher-assignments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:244
* @route '/courses/{course}/teacher-assignments'
*/
assignments.url = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return assignments.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:244
* @route '/courses/{course}/teacher-assignments'
*/
assignments.get = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: assignments.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:244
* @route '/courses/{course}/teacher-assignments'
*/
assignments.head = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: assignments.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:244
* @route '/courses/{course}/teacher-assignments'
*/
const assignmentsForm = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: assignments.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:244
* @route '/courses/{course}/teacher-assignments'
*/
assignmentsForm.get = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: assignments.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TeacherController::assignments
* @see app/Http/Controllers/TeacherController.php:244
* @route '/courses/{course}/teacher-assignments'
*/
assignmentsForm.head = (args: { course: string | number | { id: string | number } } | [course: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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