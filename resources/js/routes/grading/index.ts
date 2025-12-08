import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\GradingController::index
* @see app/Http/Controllers/GradingController.php:11
* @route '/grading/exams/submitted'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/grading/exams/submitted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GradingController::index
* @see app/Http/Controllers/GradingController.php:11
* @route '/grading/exams/submitted'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GradingController::index
* @see app/Http/Controllers/GradingController.php:11
* @route '/grading/exams/submitted'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GradingController::index
* @see app/Http/Controllers/GradingController.php:11
* @route '/grading/exams/submitted'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GradingController::index
* @see app/Http/Controllers/GradingController.php:11
* @route '/grading/exams/submitted'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GradingController::index
* @see app/Http/Controllers/GradingController.php:11
* @route '/grading/exams/submitted'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GradingController::index
* @see app/Http/Controllers/GradingController.php:11
* @route '/grading/exams/submitted'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\GradingController::session
* @see app/Http/Controllers/GradingController.php:38
* @route '/grading/session/{session}'
*/
export const session = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: session.url(args, options),
    method: 'get',
})

session.definition = {
    methods: ["get","head"],
    url: '/grading/session/{session}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GradingController::session
* @see app/Http/Controllers/GradingController.php:38
* @route '/grading/session/{session}'
*/
session.url = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return session.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GradingController::session
* @see app/Http/Controllers/GradingController.php:38
* @route '/grading/session/{session}'
*/
session.get = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: session.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GradingController::session
* @see app/Http/Controllers/GradingController.php:38
* @route '/grading/session/{session}'
*/
session.head = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: session.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GradingController::session
* @see app/Http/Controllers/GradingController.php:38
* @route '/grading/session/{session}'
*/
const sessionForm = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: session.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GradingController::session
* @see app/Http/Controllers/GradingController.php:38
* @route '/grading/session/{session}'
*/
sessionForm.get = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: session.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GradingController::session
* @see app/Http/Controllers/GradingController.php:38
* @route '/grading/session/{session}'
*/
sessionForm.head = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: session.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

session.form = sessionForm

/**
* @see \App\Http\Controllers\GradingController::grade
* @see app/Http/Controllers/GradingController.php:67
* @route '/grading/session/{session}/grade'
*/
export const grade = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: grade.url(args, options),
    method: 'post',
})

grade.definition = {
    methods: ["post"],
    url: '/grading/session/{session}/grade',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GradingController::grade
* @see app/Http/Controllers/GradingController.php:67
* @route '/grading/session/{session}/grade'
*/
grade.url = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return grade.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GradingController::grade
* @see app/Http/Controllers/GradingController.php:67
* @route '/grading/session/{session}/grade'
*/
grade.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: grade.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GradingController::grade
* @see app/Http/Controllers/GradingController.php:67
* @route '/grading/session/{session}/grade'
*/
const gradeForm = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: grade.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GradingController::grade
* @see app/Http/Controllers/GradingController.php:67
* @route '/grading/session/{session}/grade'
*/
gradeForm.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: grade.url(args, options),
    method: 'post',
})

grade.form = gradeForm

/**
* @see \App\Http\Controllers\GradingController::previewPdf
* @see app/Http/Controllers/GradingController.php:114
* @route '/grading/session/{session}/preview-pdf'
*/
export const previewPdf = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: previewPdf.url(args, options),
    method: 'get',
})

previewPdf.definition = {
    methods: ["get","head"],
    url: '/grading/session/{session}/preview-pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GradingController::previewPdf
* @see app/Http/Controllers/GradingController.php:114
* @route '/grading/session/{session}/preview-pdf'
*/
previewPdf.url = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return previewPdf.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GradingController::previewPdf
* @see app/Http/Controllers/GradingController.php:114
* @route '/grading/session/{session}/preview-pdf'
*/
previewPdf.get = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: previewPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GradingController::previewPdf
* @see app/Http/Controllers/GradingController.php:114
* @route '/grading/session/{session}/preview-pdf'
*/
previewPdf.head = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: previewPdf.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GradingController::previewPdf
* @see app/Http/Controllers/GradingController.php:114
* @route '/grading/session/{session}/preview-pdf'
*/
const previewPdfForm = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: previewPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GradingController::previewPdf
* @see app/Http/Controllers/GradingController.php:114
* @route '/grading/session/{session}/preview-pdf'
*/
previewPdfForm.get = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: previewPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GradingController::previewPdf
* @see app/Http/Controllers/GradingController.php:114
* @route '/grading/session/{session}/preview-pdf'
*/
previewPdfForm.head = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: previewPdf.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

previewPdf.form = previewPdfForm

const grading = {
    index: Object.assign(index, index),
    session: Object.assign(session, session),
    grade: Object.assign(grade, grade),
    previewPdf: Object.assign(previewPdf, previewPdf),
}

export default grading