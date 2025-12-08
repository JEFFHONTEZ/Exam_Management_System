import React from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import ExamLayout from '@/layouts/exam-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { useProctoring } from '@/hooks/useProctoring';

// --- Interfaces ---

interface Exam {
  id: number;
  title: string;
  duration_minutes: number;
  start_time?: string | null;
  end_time?: string | null;
}

interface QuestionOption {
  id: number;
  option_text: string;
}

interface Question {
  id: number;
  prompt: string;
  points?: number;
  order?: number;
  type: 'short_answer' | 'multiple_choice' | 'true_false';
  options?: QuestionOption[]; 
}

interface Session {
  id: number;
  exam_id: number;
  user_id: number;
  started_at?: string;
  submitted_at?: string | null;
}

interface PageProps {
  exam: Exam;
  session: Session;
  questions: Question[];
  sessionEndAt?: string;
  proctoring?: {
    enabled: boolean;
    fullscreen_required: boolean;
    block_contextmenu: boolean;
    block_clipboard: boolean;
    block_shortcuts: boolean;
    warn_on_violation: boolean;
    violation_threshold: number;
    counting_types: string[];
    disable_devtool: boolean;
    nosleep: boolean;
    env: string;
  };
  [key: string]: unknown;
}

export default function StudentExam() {
  const { exam, session, questions, sessionEndAt, proctoring } = usePage<PageProps>().props;
  
  // State
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [nowMs, setNowMs] = React.useState<number>(Date.now());
  const autoSubmitRef = React.useRef(false);

  // --- Proctoring Hook ---
  const p = proctoring ?? ({} as NonNullable<PageProps['proctoring']>);
  useProctoring({
    sessionId: session.id,
    disabled: submitting || !!session.submitted_at,
    enableFullscreen: p.fullscreen_required ?? true,
    blockContextMenu: p.block_contextmenu ?? true,
    blockClipboard: p.block_clipboard ?? true,
    blockShortcuts: p.block_shortcuts ?? true,
    warnOnViolation: p.warn_on_violation ?? true,
    violationThreshold: p.violation_threshold ?? 2,
    countingTypes: p.counting_types ?? ['exited_fullscreen','tab_hidden'],
    enableDisableDevtool: (p.disable_devtool ?? true) && p.env === 'production',
    enableNoSleep: p.nosleep ?? true,
  });

  // --- Navigation Guards ---
  React.useEffect(() => {
    const pushStateOnce = () => {
      try { history.pushState(null, '', window.location.href); } catch {}
    };
    pushStateOnce();

    const onPopState = () => {
      if (submitting) return;
      const proceed = window.confirm('You are in an active exam. Leaving this page may cause loss of answers. Continue?');
      if (!proceed) {
        try { history.pushState(null, '', window.location.href); } catch {}
      }
    };

    const onDocumentClick = (e: MouseEvent) => {
      if (submitting) return;
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a');
      if (anchor && (anchor as HTMLAnchorElement).href) {
        const allow = (anchor as HTMLElement).dataset.allowLeave === 'true';
        if (!allow) {
          const proceed = window.confirm('You are in an active exam. Leaving this page may cause loss of answers. Continue?');
          if (!proceed) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }
    };

    window.addEventListener('popstate', onPopState);
    document.addEventListener('click', onDocumentClick, true);
    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', onDocumentClick, true);
    };
  }, [submitting]);

  // --- Logic ---

  const handleChange = (qid: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  const handleSubmit = () => {
    if (!confirm('Submit your exam? You will not be able to change answers after submission.')) return;
    
    setSubmitting(true);
    const payload = {
      answers: Object.entries(answers).map(([question_id, answer_text]) => ({ question_id: Number(question_id), answer_text })),
    };

    router.post(`/sessions/${session.id}/answers/bulk`, payload, {
      preserveScroll: true,
      preserveState: true,
      onFinish: () => {
        router.post(`/sessions/${session.id}/submit`, {}, { preserveScroll: true, preserveState: false });
      }
    });
  };

  // --- Timer Logic (Updated) ---
  const endAtMs = React.useMemo(() => {
    // 1. Calculate when the user's specific session MUST end (Started At + Duration)
    let sessionDeadline: number | null = null;
    
    // Prefer session.started_at, fallback to exam.start_time
    const baseTimeStr = session.started_at || exam.start_time;
    
    if (baseTimeStr && exam.duration_minutes) {
      const start = new Date(baseTimeStr).getTime();
      sessionDeadline = start + (Number(exam.duration_minutes) * 60000);
    }

    // 2. Calculate the hard deadline of the exam (End Time)
    let hardDeadline: number | null = null;
    if (exam.end_time) {
      hardDeadline = new Date(exam.end_time).getTime();
    }

    // 3. Logic: 
    // If we have both, the deadline is the EARLIEST of the two.
    // e.g., if I have 60 mins left, but the exam closes in 10 mins, I only have 10 mins.
    if (sessionDeadline && hardDeadline) {
      return Math.min(sessionDeadline, hardDeadline);
    }
    
    // If only one exists, return that one.
    if (sessionDeadline) return sessionDeadline;
    if (hardDeadline) return hardDeadline;

    // Fallback to legacy prop if neither calculations worked (shouldn't happen with correct data)
    return sessionEndAt ? new Date(sessionEndAt).getTime() : null;

  }, [exam.end_time, exam.start_time, exam.duration_minutes, session.started_at, sessionEndAt]);

  const remainingMs = endAtMs ? Math.max(0, endAtMs - nowMs) : null;
  const remainingSec = remainingMs !== null ? Math.ceil(remainingMs / 1000) : null;
  
  const fmt = (sec: number) => {
    const s = Math.max(0, sec);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const ss = s % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');
    return h > 0 ? `${pad(h)}:${pad(m)}:${pad(ss)}` : `${pad(m)}:${pad(ss)}`;
  };

  React.useEffect(() => {
    if (!endAtMs) return;
    const t = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(t);
  }, [endAtMs]);

  // Auto-submit
  React.useEffect(() => {
    if (!endAtMs) return;
    if (remainingSec !== null && remainingSec <= 0 && !autoSubmitRef.current) {
      autoSubmitRef.current = true;
      setSubmitting(true);
      const payload = {
        answers: Object.entries(answers).map(([question_id, answer_text]) => ({ question_id: Number(question_id), answer_text })),
      };
      router.post(`/sessions/${session.id}/answers/bulk`, payload, {
        preserveScroll: true,
        preserveState: true,
        onFinish: () => {
          router.post(`/sessions/${session.id}/submit`, {}, { preserveScroll: true, preserveState: false });
        }
      });
    }
  }, [endAtMs, remainingSec, answers, session.id]); 

  // --- Dynamic Input Renderer ---
  const renderInput = (q: Question) => {
    // 1. True / False
    if (q.type === 'true_false') {
        return (
            <RadioGroup 
                value={answers[q.id] ?? ''} 
                onValueChange={(val) => handleChange(q.id, val)}
                className="mt-3 space-y-3"
            >
                <div className="flex items-center space-x-3 border p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                    <RadioGroupItem value="True" id={`q-${q.id}-true`} />
                    <Label htmlFor={`q-${q.id}-true`} className="flex-1 cursor-pointer font-normal">True</Label>
                </div>
                <div className="flex items-center space-x-3 border p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                    <RadioGroupItem value="False" id={`q-${q.id}-false`} />
                    <Label htmlFor={`q-${q.id}-false`} className="flex-1 cursor-pointer font-normal">False</Label>
                </div>
            </RadioGroup>
        );
    }

    // 2. Multiple Choice
    if (q.type === 'multiple_choice' && q.options && q.options.length > 0) {
        return (
            <RadioGroup 
                value={answers[q.id] ?? ''} 
                onValueChange={(val) => handleChange(q.id, val)}
                className="mt-3 space-y-3"
            >
                {q.options.map((opt) => (
                    <div key={opt.id} className="flex items-center space-x-3 border p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                        <RadioGroupItem value={opt.option_text} id={`q-${q.id}-opt-${opt.id}`} />
                        <Label htmlFor={`q-${q.id}-opt-${opt.id}`} className="flex-1 cursor-pointer font-normal">
                            {opt.option_text}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        );
    }

    // 3. Short Answer (Default)
    return (
        <Textarea
            rows={6}
            value={answers[q.id] ?? ''}
            onChange={(e) => handleChange(q.id, e.target.value)}
            placeholder="Type your answer here..."
            className="mt-2"
        />
    );
  };

  return (
    <ExamLayout>
      <Head title={`Exam • ${exam.title}`} />
      <div className="grid gap-4 p-4 md:grid-cols-[1fr_360px]">
        
        {/* Main Exam Content */}
        <Card className="order-2 md:order-1">
          <CardHeader>
            <CardTitle>{exam.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {questions.length === 0 && (
              <p className="text-sm text-muted-foreground">No questions available for this exam.</p>
            )}
            
            {questions.map((q, idx) => (
              <div key={q.id} className="rounded-lg border p-5 shadow-sm bg-card text-card-foreground">
                <div className="flex justify-between items-start mb-3">
                    <div className="text-sm font-semibold text-muted-foreground">Question {idx + 1}</div>
                    <div className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded shadow-sm">
                        {q.points} {q.points === 1 ? 'pt' : 'pts'}
                    </div>
                </div>
                
                <div className="whitespace-pre-wrap text-base leading-7 mb-4 font-medium">
                    {q.prompt}
                </div>
                
                {/* Dynamically render input based on question type */}
                {renderInput(q)}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Sidebar: Timer & Submit */}
        <div className="order-1 md:order-2 space-y-4">
          {endAtMs && (
            <Card>
              <CardHeader>
                <CardTitle>Time Remaining</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-mono ${remainingSec !== null && remainingSec <= 60 ? 'text-destructive' : ''}`}>
                  {remainingSec !== null ? fmt(remainingSec) : '—'}
                </div>
                {/* Optional: Show why the timer is set this way */}
                {exam.end_time && (
                    <div className="text-xs text-muted-foreground mt-2">
                        Closes at: {new Date(exam.end_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                )}
              </CardContent>
            </Card>
          )}
          <Card>
            <CardHeader>
              <CardTitle>Submit Exam</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">Exam: {exam.title}</div>
              <div className="text-sm">Duration: {exam.duration_minutes} minutes</div>
              <div className="text-xs text-muted-foreground">Session ID: {session.id}</div>
              <div className="pt-2">
                <Button 
                    className="w-full" 
                    variant="destructive" 
                    onClick={handleSubmit} 
                    disabled={submitting || (remainingSec !== null && remainingSec <= 0)}
                >
                  {submitting ? 'Submitting…' : 'Submit Exam'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ExamLayout>
  );
}