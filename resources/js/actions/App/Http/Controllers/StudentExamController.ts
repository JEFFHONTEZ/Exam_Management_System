import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
export const start = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
start.url = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
start.get = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
start.head = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: start.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
const startForm = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
startForm.get = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::start
* @see app/Http/Controllers/StudentExamController.php:24
* @route '/exams/{exam}/start'
*/
startForm.head = (args: { exam: number | { id: number } } | [exam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: start.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

start.form = startForm

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
* @see \App\Http\Controllers\StudentExamController::bulkAnswer
* @see app/Http/Controllers/StudentExamController.php:140
* @route '/sessions/{session}/answers/bulk'
*/
export const bulkAnswer = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAnswer.url(args, options),
    method: 'post',
})

bulkAnswer.definition = {
    methods: ["post"],
    url: '/sessions/{session}/answers/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StudentExamController::bulkAnswer
* @see app/Http/Controllers/StudentExamController.php:140
* @route '/sessions/{session}/answers/bulk'
*/
bulkAnswer.url = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return bulkAnswer.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentExamController::bulkAnswer
* @see app/Http/Controllers/StudentExamController.php:140
* @route '/sessions/{session}/answers/bulk'
*/
bulkAnswer.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAnswer.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentExamController::bulkAnswer
* @see app/Http/Controllers/StudentExamController.php:140
* @route '/sessions/{session}/answers/bulk'
*/
const bulkAnswerForm = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkAnswer.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentExamController::bulkAnswer
* @see app/Http/Controllers/StudentExamController.php:140
* @route '/sessions/{session}/answers/bulk'
*/
bulkAnswerForm.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkAnswer.url(args, options),
    method: 'post',
})

bulkAnswer.form = bulkAnswerForm

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

/**
* @see \App\Http\Controllers\StudentExamController::resultPdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
export const resultPdf = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: resultPdf.url(args, options),
    method: 'get',
})

resultPdf.definition = {
    methods: ["get","head"],
    url: '/student/results/{session}/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentExamController::resultPdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
resultPdf.url = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return resultPdf.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentExamController::resultPdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
resultPdf.get = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: resultPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::resultPdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
resultPdf.head = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: resultPdf.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentExamController::resultPdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
const resultPdfForm = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: resultPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::resultPdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
resultPdfForm.get = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: resultPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::resultPdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
resultPdfForm.head = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: resultPdf.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

resultPdf.form = resultPdfForm

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
export const verify = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(options),
    method: 'get',
})

verify.definition = {
    methods: ["get","head"],
    url: '/results/verify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
verify.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
verify.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verify.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
const verifyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
verifyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::verify
* @see app/Http/Controllers/StudentExamController.php:343
* @route '/results/verify'
*/
verifyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

verify.form = verifyForm

const StudentExamController = { start, answer, bulkAnswer, submit, results, resultPdf, verify }

export default StudentExamController