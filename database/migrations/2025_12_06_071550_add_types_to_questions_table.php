<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('questions', function (Blueprint $table) {
            $table->enum('type', ['short_answer', 'multiple_choice', 'true_false'])->default('short_answer')->after('exam_id');
        });

        Schema::create('question_options', function (Blueprint $table) {
            $table->id();
            $table->foreignId('question_id')->constrained()->cascadeOnDelete();
            $table->string('option_text');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('question_options');
        Schema::table('questions', function (Blueprint $table) {
            $table->dropColumn('type');
        });
    }
};
