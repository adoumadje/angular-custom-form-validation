import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from './validators/nospace.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-form-validation';

  form:any;

  constructor( fb:FormBuilder) {
    this.form = fb.group({
      username: ['',[
        Validators.required,
        Validators.minLength(5),
        noSpace.noSpaceValidations
      ]],

      password: ['',Validators.required]
    })
  }

  get fc():any {
    return this.form.controls
  }
}
