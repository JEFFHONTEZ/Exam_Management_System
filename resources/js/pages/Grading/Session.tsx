import React from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import grading from '@/routes/grading';
import { CheckCircle2 } from 'lucide-react';

// --- Interfaces ---

interface AnswerKey {
  id: number;
  answer: string;
}

interface QuestionOption {
    id: number;
    option_text: string;
}

interface Question {
  id: number;
  prompt: string;
  points?: number | null;
  type?: string;
  answer_key?: AnswerKey[]; // Loaded from backend
  options?: QuestionOption[];
}

interface AnswerRow {
  id: number;
  answer_text?: string | null;
  points_awarded?: number | null;
  comments?: string | null;
  question: Question;
}

interface SessionData {
  id: number;
  user: { id: number; name: string };
  exam: { id: number; title: string };
  student_answers?: AnswerRow[];
  studentAnswers?: AnswerRow[];
  teacher_comment?: string | null; // Handle existing comments
}

interface PageProps {
  session: SessionData;
  [key: string]: unknown;
}

export default function GradingSession() {
  const { session } = usePage<PageProps>().props;
  
  // Normalize answers field name from Laravel
  const answers = (session as any).student_answers ?? (session as any).studentAnswers ?? [];
  const [rows, setRows] = React.useState<AnswerRow[]>(answers);
  const [saving, setSaving] = React.useState(false);
  const [overallComment, setOverallComment] = React.useState(session.teacher_comment || '');

  const handleChange = (id: number, field: 'points_awarded' | 'comments', value: string) => {
    setRows(prev => prev.map(r => r.id === id ? { ...r, [field]: field === 'points_awarded' ? Number(value) : value } : r));
  };

  const total = rows.reduce((acc, r) => acc + (Number.isFinite(r.points_awarded as any) ? Number(r.points_awarded) : 0), 0);

  const handleSubmit = () => {
    setSaving(true);
    router.post(grading.grade(session.id).url, { 
      answers: rows.map(r => ({ id: r.id, points_awarded: r.points_awarded })), 
      teacher_comment: overallComment 
    }, {
      onFinish: () => setSaving(false)
    });
  };

  // Helper to get expected answer string safely
  const getExpectedAnswer = (q: Question) => {
    if (q.answer_key && q.answer_key.length > 0) {
        return q.answer_key[0].answer;
    }
    return null;
  };

  return (
    <AppLayout breadcrumbs={[{ title: 'Grading', href: grading.index().url }, { title: session.exam.title, href: grading.session(session.id).url }]}> 
      <Head title={`Grade • ${session.exam.title}`} />
      <div className="p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Grade: {session.exam.title} — {session.user.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-6">
              {rows.map((r, idx) => {
                const expected = getExpectedAnswer(r.question);
                
                return (
                  <div key={r.id} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                    {/* Prompt Header */}
                    <div className="p-4 bg-muted/40 border-b">
                        <div className="flex justify-between items-start">
                            <div className="text-sm font-medium text-muted-foreground">Question {idx + 1}</div>
                            <div className="text-xs bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">Max: {r.question.points} pts</div>
                        </div>
                        <div className="whitespace-pre-wrap text-base font-medium mt-1">{r.question.prompt}</div>
                    </div>

                    <div className="p-4 grid gap-6 md:grid-cols-2">
                        {/* LEFT: Answers */}
                        <div className="space-y-4">
                            
                            {/* Expected Answer Box */}
                            <div className="rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3">
                                <div className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide flex items-center gap-1 mb-1">
                                    <CheckCircle2 className="w-3 h-3" /> Expected Answer
                                </div>
                                <div className="text-sm text-green-900 dark:text-green-100 font-medium">
                                    {expected || <span className="italic opacity-60">No expected answer provided</span>}
                                </div>
                            </div>

                            {/* Student Answer Box */}
                            <div>
                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                                    Student Answer
                                </div>
                                <div className={`text-sm p-3 rounded-md border ${!r.answer_text ? 'bg-slate-50 italic text-muted-foreground' : 'bg-background'}`}>
                                    {r.answer_text || 'No answer submitted'}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Grading Controls */}
                        <div className="flex flex-col justify-center space-y-2 md:border-l md:pl-6">
                            <label className="text-sm font-medium" htmlFor={`points-${r.id}`}>
                                Points to Award
                            </label>
                            <Input 
                                id={`points-${r.id}`} 
                                type="number" 
                                min={0} 
                                max={r.question.points ?? undefined}
                                step={0.5} 
                                className="md:w-full"
                                placeholder="0"
                                value={r.points_awarded ?? ''} 
                                onChange={e => handleChange(r.id, 'points_awarded', e.target.value)} 
                            />
                            <p className="text-xs text-muted-foreground">
                                Adjust score based on comparison.
                            </p>
                        </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Overall Footer */}
            {/* Overall Footer */}
            <div className="pt-6 border-t mt-8 bg-slate-50/50 dark:bg-slate-950/30 -mx-6 px-6 pb-6">
              <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-medium text-foreground">Total Score</div>
                  <div className="text-3xl font-bold font-mono text-primary">{total.toFixed(2)}</div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-foreground" htmlFor="overall-comment">Overall Exam Feedback</label>
                <Textarea 
                    id="overall-comment" 
                    rows={4} 
                    className="bg-background"
                    placeholder="Write feedback for the student regarding their overall performance..." 
                    value={overallComment} 
                    onChange={e => setOverallComment(e.target.value)} 
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <Button asChild variant="outline" className="bg-background">
                  <a href={`/grading/session/${session.id}/preview-pdf`} target="_blank" rel="noopener noreferrer">Preview Result PDF</a>
                </Button>
                <Button onClick={handleSubmit} disabled={saving} size="lg" className="min-w-[150px]">
                    {saving ? 'Saving...' : 'Finalize & Save'}
                </Button>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}