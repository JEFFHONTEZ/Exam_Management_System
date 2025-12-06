import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { OctagonAlert } from 'lucide-react';

interface Exam {
    id: number;
    unit_id: number;
    title: string;
    duration_minutes: number;
    passing_score: number;
    is_published: boolean;
    start_time?: string | null;
    end_time?: string | null; // Added this
}

interface Unit {
    id: number;
    title: string;
    course_id: number;
}

interface Course {
    id: number;
    name: string;
}

interface PageProps extends InertiaPageProps {
    exam: Exam;
    course: Course;
    unit: Unit;
}

export default function Edit({ exam }: PageProps) {
    const { course, unit } = usePage<PageProps>().props;

    function route(name: string, params?: (number | string)[]): string {
        if (name === 'courses.units.exams.update' && params && params.length === 3) {
            return `/courses/${params[0]}/units/${params[1]}/exams/${params[2]}`;
        }
        return '/';
    }

    // helper to format ISO datetime (UTC) into datetime-local value
    const formatForDatetimeLocal = (iso?: string | null) => {
        if (!iso) return '';
        const d = new Date(iso);
        // Adjust for timezone offset to show local time in input
        const offset = d.getTimezoneOffset() * 60000;
        const localDate = new Date(d.getTime() - offset);
        return localDate.toISOString().slice(0, 16);
    };

    const { data, setData, put, processing, errors } = useForm({
        title: exam.title,
        duration_minutes: exam.duration_minutes,
        passing_score: exam.passing_score,
        is_published: exam.is_published,
        start_time: formatForDatetimeLocal(exam.start_time ?? undefined),
        end_time: formatForDatetimeLocal(exam.end_time ?? undefined), // Added this
    });

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('courses.units.exams.update', [course.id, unit.id, exam.id]));
    };

    if (!exam || !unit || !course) {
        return (
            <AppLayout>
                <Head title="Exam Not Found" />
                <div className="w-8/12 p-4 text-center text-red-500">
                    Error: Required exam data not found. Please check your route/controller.
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout breadcrumbs={[{ title: 'Edit Exam', href: `/courses/${course.id}/units/${unit.id}/exams/${exam.id}/edit` }]}>
            <Head title={`Edit Exam: ${exam.title}`} />
            <div className='w-8/12 p-4'>
                <form onSubmit={handleUpdate} className='space-y-4'>
                    {/* Display validation errors */}
                    {errors && Object.keys(errors).length > 0 && (
                        <Alert>
                            <OctagonAlert />
                            <AlertTitle>Errors</AlertTitle>
                            <AlertDescription>
                                {Object.values(errors).map((error, index) => (
                                    <div key={index}>{error}</div>
                                ))}
                            </AlertDescription>
                        </Alert>
                    )}
                    
                    <div className='gap-2'>
                        <Label htmlFor="exam-title">Title</Label>
                        <Input type='text' placeholder="Enter exam title" value={data.title} onChange={e => setData('title', e.target.value)} />
                    </div>
                    
                    <div className='gap-2'>
                        <Label htmlFor="exam-duration">Duration (minutes)</Label>
                        <Input type='number' min={1} placeholder="Enter duration in minutes" value={data.duration_minutes} onChange={e => setData('duration_minutes', Number(e.target.value))} />
                    </div>
                    
                    <div className='gap-2'>
                        <Label htmlFor="exam-passing-score">Passing Score</Label>
                        <Input type='number' min={0} max={100} step={0.01} placeholder="Enter passing score" value={data.passing_score} onChange={e => setData('passing_score', Number(e.target.value))} />
                    </div>
                    
                    <div className='gap-2'>
                        <Label htmlFor="exam-start-time">Start Date & Time</Label>
                        <Input 
                            id="exam-start-time" 
                            type='datetime-local' 
                            value={data.start_time}
                            onChange={e => setData('start_time', e.target.value)} 
                        />
                    </div>

                    {/* NEW END TIME FIELD */}
                    <div className='gap-2'>
                        <Label htmlFor="exam-end-time">End Date & Time</Label>
                        <Input 
                            id="exam-end-time" 
                            type='datetime-local' 
                            value={data.end_time}
                            onChange={e => setData('end_time', e.target.value)} 
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            The strict deadline. The exam closes at this time regardless of the student's remaining duration.
                        </p>
                    </div>
                    
                    <div className='gap-2'>
                        <Label htmlFor="exam-published">Published</Label>
                        <div className="flex items-center space-x-2">
                            <input 
                                type='checkbox' 
                                id="exam-published"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                checked={data.is_published} 
                                onChange={e => setData('is_published', e.target.checked)} 
                            />
                            <span className="text-sm text-gray-600">Visible to students</span>
                        </div>
                    </div>
                    
                    <Button type="submit" disabled={processing}>Update Exam</Button>
                </form>
            </div>
        </AppLayout>
    );
}