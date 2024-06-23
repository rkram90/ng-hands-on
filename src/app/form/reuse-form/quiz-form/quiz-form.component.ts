import { Component, Input, inject } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

type FormAnswer = FormGroup<{ text: FormControl<string> }>;

type FormQuestion = FormGroup<{
  questionName: FormControl<string>;
  answers: FormArray<FormAnswer>;
}>;

type Form = FormGroup<{
  questions: FormArray<FormQuestion>;
}>;

@Component({
  selector: 'app-quiz-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  templateUrl: './quiz-form.component.html',
  styleUrl: './quiz-form.component.css',
})
export class QuizFormComponent {
  @Input({ required: true }) controlKey = '';
  quizForm!: Form;
  parentContainer = inject(ControlContainer);
  fb = inject(NonNullableFormBuilder);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.quizForm = this.fb.group({
      questions: this.fb.array<FormQuestion>([this.generateQuestion()]),
    });

    this.parentFormGroup.addControl(this.controlKey, this.quizForm);
  }

  generateQuestion(): FormQuestion {
    return this.fb.group({
      questionName: '',
      answers: this.fb.array<FormAnswer>([]),
    });
  }

  addQuestion(): void {
    this.quizForm.controls.questions.push(this.generateQuestion());
  }

  removeQuestion(questionIndex: number): void {
    this.quizForm.controls.questions.removeAt(questionIndex);
  }

  addAnswer(questionIndex: number): void {
    const newAnswer: FormAnswer = this.fb.group({
      text: '',
    });
    this.quizForm.controls.questions
      .at(questionIndex)
      ?.controls?.answers?.push(newAnswer);
  }

  removeAnswer(questionIndex: number, answerIndex: number): void {
    this.quizForm.controls.questions
      .at(questionIndex)
      ?.controls?.answers?.removeAt(answerIndex);
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
