import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import answers from './answers'
import proctorEvents from './proctor-events'
/**
* @see \App\Http\Controllers\StudentExamController::answer
* @see app/Http/Controllers/StudentExamController.php:99
* @route '/sessions/{session}/answer'
*/
export const answer = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: answer.url(args, options),
    method: 'post',
})

answer.definition = {
    methods: ["post"],
    url: '/sessions/{session}/answer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StudentExamController::answer
* @see app/Http/Controllers/StudentExamController.php:99
* @route '/sessions/{session}/answer'
*/
answer.url = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { session: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { session: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            session: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        session: typeof args.session === 'object'
        ? args.session.id
        : args.session,
    }

    return answer.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentExamController::answer
* @see app/Http/Controllers/StudentExamController.php:99
* @route '/sessions/{session}/answer'
*/
answer.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: answer.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentExamController::answer
* @see app/Http/Controllers/StudentExamController.php:99
* @route '/sessions/{session}/answer'
*/
const answerForm = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: answer.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentExamController::answer
* @see app/Http/Controllers/StudentExamController.php:99
* @route '/sessions/{session}/answer'
*/
answerForm.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: answer.url(args, options),
    method: 'post',
})

answer.form = answerForm

/**
* @see \App\Http\Controllers\StudentExamController::submit
* @see app/Http/Controllers/StudentExamController.php:178
* @route '/sessions/{session}/submit'
*/
export const submit = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/sessions/{session}/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StudentExamController::submit
* @see app/Http/Controllers/StudentExamController.php:178
* @route '/sessions/{session}/submit'
*/
submit.url = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { session: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { session: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            session: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        session: typeof args.session === 'object'
        ? args.session.id
        : args.session,
    }

    return submit.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentExamController::submit
* @see app/Http/Controllers/StudentExamController.php:178
* @route '/sessions/{session}/submit'
*/
submit.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentExamController::submit
* @see app/Http/Controllers/StudentExamController.php:178
* @route '/sessions/{session}/submit'
*/
const submitForm = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentExamController::submit
* @see app/Http/Controllers/StudentExamController.php:178
* @route '/sessions/{session}/submit'
*/
submitForm.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

submit.form = submitForm

const sessions = {
    answer: Object.assign(answer, answer),
    answers: Object.assign(answers, answers),
    submit: Object.assign(submit, submit),
    proctorEvents: Object.assign(proctorEvents, proctorEvents),
}

export default sessions