import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { OctagonAlert, Plus, Trash2 } from 'lucide-react';
import React, { useEffect } from 'react';

// ... existing interfaces ...
interface Exam { id: number; title: string; unit_id: number; }
interface Unit { id: number; title: string; course_id: number; }
interface Course { id: number; name: string; }

interface PageProps {
  exam: Exam;
  unit: Unit;
  course: Course;
  errors: Record<string, string>;
  [key: string]: unknown;
}

export default function Create() {
  const { exam, unit, course, errors } = usePage<PageProps>().props;

  // ... breadcrumbs and route helper ... 
  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Courses', href: '/courses' },
    { title: course.name, href: `/courses/${course.id}/units` },
    { title: unit.title, href: `/courses/${course.id}/units/${unit.id}/exams` },
    { title: exam.title, href: `/courses/${course.id}/units/${unit.id}/exams/${exam.id}/edit` },
    { title: 'Questions', href: `/exams/${exam.id}/questions` },
    { title: 'Create', href: `/exams/${exam.id}/questions/create` },
  ];

  function route(name: string): string {
    if (name === 'exams.questions.store') return `/exams/${exam.id}/questions`;
    if (name === 'exams.questions.index') return `/exams/${exam.id}/questions`;
    return '/';
  }

  const { data, setData, post, processing, errors: formErrors } = useForm({
    type: 'short_answer',
    prompt: '',
    points: 1,
    expected_answer: '',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], // Default options for MCQ
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('exams.questions.store'));
  }

  // Helper to handle MCQ option text changes
  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...data.options];
    newOptions[index] = value;
    setData('options', newOptions);
    
    // If we changed the text of the option that was currently selected as the "correct answer", update expected_answer too
    if (data.expected_answer === data.options[index]) {
        setData(prev => ({...prev, options: newOptions, expected_answer: value}));
    } else {
        setData('options', newOptions);
    }
  };

  const addOption = () => setData('options', [...data.options, `Option ${data.options.length + 1}`]);
  
  const removeOption = (index: number) => {
    const optToRemove = data.options[index];
    const newOptions = data.options.filter((_, i) => i !== index);
    setData('options', newOptions);
    // If we removed the correct answer, reset expected answer
    if (data.expected_answer === optToRemove) {
        setData(prev => ({...prev, options: newOptions, expected_answer: ''}));
    } else {
        setData('options', newOptions);
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={`Create Question • ${exam.title}`} />
      <div className="w-8/12 p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.keys(errors).length > 0 && (
            <Alert variant="destructive">
              <OctagonAlert className="h-4 w-4" />
              <AlertTitle>Errors</AlertTitle>
              <AlertDescription>
                Please correct the errors below.
              </AlertDescription>
            </Alert>
          )}

          {/* 1. Question Type Dropdown */}
          <div className="space-y-2">
            <Label>Question Type</Label>
            <Select 
                value={data.type} 
                onValueChange={(val) => {
                    setData(prev => ({
                        ...prev, 
                        type: val, 
                        expected_answer: '' // Reset answer when type changes
                    }));
                }}
            >
                <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="short_answer">Short Answer (Normal)</SelectItem>
                    <SelectItem value="multiple_choice">Multiple Choice</SelectItem>
                    <SelectItem value="true_false">True / False</SelectItem>
                </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="prompt">Question Prompt</Label>
            <textarea 
                id="prompt" 
                className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-primary" 
                rows={4} 
                value={data.prompt} 
                onChange={e => setData('prompt', e.target.value)} 
                required 
            />
            {formErrors.prompt && <p className="text-red-600 text-xs">{formErrors.prompt}</p>}
          </div>

          <div className="w-32 space-y-2">
             <Label htmlFor="points">Points</Label>
             <Input 
                id="points" 
                type="number" 
                value={data.points} 
                min={0} 
                onChange={e => setData('points', Number(e.target.value))} 
            />
             {formErrors.points && <p className="text-red-600 text-xs">{formErrors.points}</p>}
          </div>

          {/* 2. Dynamic Answer Section based on Type */}
          
          {/* A. True / False */}
          {data.type === 'true_false' && (
            // CHANGED: Replaced 'bg-slate-50' with 'bg-card' (or remove it entirely)
            <div className="space-y-3 border p-4 rounded-md bg-card">
                <Label>Correct Answer</Label>
                <RadioGroup 
                    value={data.expected_answer} 
                    onValueChange={(val) => setData('expected_answer', val)}
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="True" id="tf-true" />
                        <Label htmlFor="tf-true">True</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="False" id="tf-false" />
                        <Label htmlFor="tf-false">False</Label>
                    </div>
                </RadioGroup>
                {formErrors.expected_answer && <p className="text-red-600 text-xs">{formErrors.expected_answer}</p>}
            </div>
          )}

          {/* B. Multiple Choice */}
          {data.type === 'multiple_choice' && (
             // CHANGED: Replaced 'bg-slate-50' with 'bg-card'
             <div className="space-y-3 border p-4 rounded-md bg-card">
                <div className="flex justify-between items-center">
                    <Label>Options (Check the circle to mark correct answer)</Label>
                    <Button type="button" size="sm" variant="outline" onClick={addOption}>
                        <Plus className="w-4 h-4 mr-1"/> Add Option
                    </Button>
                </div>
                
                <RadioGroup 
                    value={data.expected_answer} 
                    onValueChange={(val) => setData('expected_answer', val)}
                    className="space-y-2"
                >
                    {data.options.map((opt, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <RadioGroupItem value={opt} id={`opt-${idx}`} disabled={!opt} />
                            <Input 
                                value={opt} 
                                onChange={(e) => handleOptionChange(idx, e.target.value)}
                                placeholder={`Option ${idx + 1}`}
                                className="flex-1"
                            />
                            {data.options.length > 2 && (
                                <Button type="button" size="icon" variant="ghost" onClick={() => removeOption(idx)}>
                                    <Trash2 className="w-4 h-4 text-red-500" />
                                </Button>
                            )}
                        </div>
                    ))}
                </RadioGroup>
                <p className="text-xs text-muted-foreground mt-2">Enter text for options, then select the radio button corresponding to the correct answer.</p>
                {formErrors.expected_answer && <p className="text-red-600 text-xs">{formErrors.expected_answer}</p>}
             </div>
          )}

          {/* C. Short Answer (Default) */}
          {data.type === 'short_answer' && (
            <div className="space-y-2">
                <Label htmlFor="expected_answer">Expected Answer Key (Optional)</Label>
                <textarea 
                    id="expected_answer" 
                    className="w-full border rounded p-2 text-sm" 
                    rows={3} 
                    value={data.expected_answer} 
                    onChange={e => setData('expected_answer', e.target.value)} 
                />
                <p className="text-xs text-muted-foreground">Used for manual grading reference.</p>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button type="submit" disabled={processing}>{processing ? 'Saving...' : 'Save Question'}</Button>
            <Button variant="outline" type="button" onClick={() => window.location.href = route('exams.questions.index')}>Cancel</Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}