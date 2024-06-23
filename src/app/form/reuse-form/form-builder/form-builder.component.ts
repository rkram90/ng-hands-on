import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressGroupComponent } from '../address-group/address-group.component';
import { QuizFormComponent } from '../quiz-form/quiz-form.component';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [ReactiveFormsModule, AddressGroupComponent, QuizFormComponent],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
  form = new FormGroup({
    displayName: new FormControl(''),
  });

  submit() {
    // do whatever you need with it...
    console.log(this.form.value);
    this.form.reset();
  }
}
