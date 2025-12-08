import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import exams from './exams'
import sessions from './sessions'
import results8ded7a from './results'
import revision from './revision'
/**
* @see \App\Http\Controllers\StudentExamController::results
* @see app/Http/Controllers/StudentExamController.php:210
* @route '/student/results'
*/
export const results = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: results.url(options),
    method: 'get',
})

results.definition = {
    methods: ["get","head"],
    url: '/student/results',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentExamController::results
* @see app/Http/Controllers/StudentExamController.php:210
* @route '/student/results'
*/
results.url = (options?: RouteQueryOptions) => {
    return results.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentExamController::results
* @see app/Http/Controllers/StudentExamController.php:210
* @route '/student/results'
*/
results.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: results.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::results
* @see app/Http/Controllers/StudentExamController.php:210
* @route '/student/results'
*/
results.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: results.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentExamController::results
* @see app/Http/Controllers/StudentExamController.php:210
* @route '/student/results'
*/
const resultsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: results.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::results
* @see app/Http/Controllers/StudentExamController.php:210
* @route '/student/results'
*/
resultsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: results.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::results
* @see app/Http/Controllers/StudentExamController.php:210
* @route '/student/results'
*/
resultsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: results.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

results.form = resultsForm

const student = {
    exams: Object.assign(exams, exams),
    sessions: Object.assign(sessions, sessions),
    results: Object.assign(results, results8ded7a),
    revision: Object.assign(revision, revision),
}

export default student