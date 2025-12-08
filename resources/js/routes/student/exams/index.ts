import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
export const start = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(args, options),
    method: 'get',
})

start.definition = {
    methods: ["get","head"],
    url: '/exams/{exam}/start',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
start.url = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return start.definition.url
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
start.get = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
start.head = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: start.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
const startForm = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
startForm.get = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
startForm.head = (args: { exam: string | number | { id: string | number } } | [exam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

start.form = startForm

const exams = {
    start: Object.assign(start, start),
}

export default exams