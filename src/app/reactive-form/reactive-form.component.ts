import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['male', 'female'];
  form: FormGroup;

  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.form = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.isUsernameValid.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.isEmailValid)
      }),
      'gender': new FormControl(this.genders[0]),
      'hobbies': new FormArray([])
    });

    // reactive form observables
    this.form.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );

    this.form.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );

    // setting and patching work just as expected
  }

  onSubmit() {
    console.log(this.form);
    this.form.reset({
      'gender': this.genders[0]
    });
  }

  onAddHobby() {
    (<FormArray> this.form.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  // own validation function
  isUsernameValid(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }

    return null;
  }

  // own async validation function
  isEmailValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

}
