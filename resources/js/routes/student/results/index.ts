import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\StudentExamController::pdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
export const pdf = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(args, options),
    method: 'get',
})

pdf.definition = {
    methods: ["get","head"],
    url: '/student/results/{session}/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentExamController::pdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
pdf.url = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return pdf.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentExamController::pdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
pdf.get = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::pdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
pdf.head = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pdf.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentExamController::pdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
const pdfForm = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::pdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
pdfForm.get = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentExamController::pdf
* @see app/Http/Controllers/StudentExamController.php:227
* @route '/student/results/{session}/pdf'
*/
pdfForm.head = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pdf.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pdf.form = pdfForm

const results = {
    pdf: Object.assign(pdf, pdf),
}

export default results