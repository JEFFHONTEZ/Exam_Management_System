<?php

namespace App\Http\Controllers;

use App\Models\{Exam, Question, QuestionAnswer};
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index(Exam $exam)
    {
        $this->authorize('viewAny', Question::class);
        // Teachers can only access questions for exams under their units
        $user = auth()->user();
        if ($user && $user->hasRole('teacher')) {
            $teacher = $user->teacher;
            $exam->loadMissing('unit.teachers');
            if (!$exam->unit || !$exam->unit->teachers->contains('id', $teacher->id)) {
                abort(403);
            }
        }
	$exam->load('unit.course');
	$questions = $exam->questions()->with('answerKey')->get();
        return inertia('Questions/Index', [
            'exam' => $exam,
            'unit' => $exam->unit,
            'course' => $exam->unit?->course,
            'questions' => $questions,
        ]);
    }

    public function create(Exam $exam)
    {
        $this->authorize('create', Question::class);
        $user = auth()->user();
        if ($user && $user->hasRole('teacher')) {
            $teacher = $user->teacher;
            $exam->loadMissing('unit.teachers');
            if (!$exam->unit || !$exam->unit->teachers->contains('id', $teacher->id)) {
                abort(403);
            }
        }
        $exam->load('unit.course');
        return inertia('Questions/Create', [
            'exam' => $exam,
            'unit' => $exam->unit,
            'course' => $exam->unit?->course,
        ]);
    }

    public function store(Request $request, Exam $exam)
    {
        $this->authorize('create', Question::class);
        $user = auth()->user();
        if ($user && $user->hasRole('teacher')) {
            $teacher = $user->teacher;
            $exam->loadMissing('unit.teachers');
            if (!$exam->unit || !$exam->unit->teachers->contains('id', $teacher->id)) {
                abort(403);
            }
        }
        $data = $request->validate([
            'type'            => 'required|in:short_answer,multiple_choice,true_false',
            'prompt'          => 'required|string',
            'points'          => 'nullable|numeric|min:0',
            'expected_answer' => 'nullable|string',
            // Validate options if it is multiple choice
            'options'         => 'nullable|array',
            'options.*'       => 'required_with:options|string',
        ]);

        $question = $exam->questions()->create([
            'type'   => $data['type'],
            'prompt' => $data['prompt'],
            'points' => $data['points'] ?? 1,
        ]);

        // Save Expected Answer (Correct Answer)
        if (!empty($data['expected_answer'])) {
            $question->answerKey()->create(['answer' => $data['expected_answer']]);
        }

        // Save Options for MCQ
        if ($data['type'] === 'multiple_choice' && !empty($data['options'])) {
            foreach ($data['options'] as $opt) {
                $question->options()->create(['option_text' => $opt]);
            }
        }

        return redirect()->route('exams.questions.index', $exam)->with('message', 'Question created');
    }

    public function edit(Exam $exam, Question $question)
    {
        $this->authorize('view', $question);
	$user = auth()->user();
	if ($user && $user->hasRole('teacher')) {
	    $teacher = $user->teacher;
	    $exam->loadMissing('unit.teachers');
	    if (!$exam->unit || !$exam->unit->teachers->contains('id', $teacher->id)) {
	        abort(403);
	    }
	}
	$exam->load('unit.course');
        // Load options for the form
        $question->load(['answerKey', 'options']); 

        return inertia('Questions/Edit', [
            'exam'      => $exam,
            'unit'      => $exam->unit,
            'course'    => $exam->unit?->course,
            'question'  => $question,
            'answerKey' => $question->answerKey,
            'options'   => $question->options, // Pass options to view
        ]);
    }

    public function update(Request $request, Exam $exam, Question $question)
    {
        $this->authorize('update', $question);
        $user = auth()->user();
        if ($user && $user->hasRole('teacher')) {
            $teacher = $user->teacher;
            $exam->loadMissing('unit.teachers');
            if (!$exam->unit || !$exam->unit->teachers->contains('id', $teacher->id)) {
                abort(403);
            }
        }
        $data = $request->validate([
            'type'            => 'required|in:short_answer,multiple_choice,true_false',
            'prompt'          => 'required|string',
            'points'          => 'nullable|numeric|min:0',
            'expected_answer' => 'nullable|string',
            'options'         => 'nullable|array',
            'options.*'       => 'required_with:options|string',
        ]);

        $question->update([
            'type'   => $data['type'],
            'prompt' => $data['prompt'],
            'points' => $data['points'] ?? $question->points,
        ]);

        // Update Answer Key
        $question->answerKey()->delete();
        if (!empty($data['expected_answer'])) {
            $question->answerKey()->create(['answer' => $data['expected_answer']]);
        }

        // Update Options (Delete all and recreate for simplicity)
        if ($data['type'] === 'multiple_choice') {
            $question->options()->delete();
            if(!empty($data['options'])) {
                foreach ($data['options'] as $opt) {
                    $question->options()->create(['option_text' => $opt]);
                }
            }
        } elseif ($data['type'] !== 'multiple_choice') {
            // Cleanup options if type changed from MCQ to something else
            $question->options()->delete();
        }

        return redirect()->route('exams.questions.index', $exam)->with('message', 'Question updated');
    }

    public function destroy(Exam $exam, Question $question)
    {
        $this->authorize('delete', $question);
        $user = auth()->user();
        if ($user && $user->hasRole('teacher')) {
            $teacher = $user->teacher;
            $exam->loadMissing('unit.teachers');
            if (!$exam->unit || !$exam->unit->teachers->contains('id', $teacher->id)) {
                abort(403);
            }
        }
        $question->delete();
    return redirect()->route('exams.questions.index', $exam)->with('message', 'Question deleted');
    }
}
