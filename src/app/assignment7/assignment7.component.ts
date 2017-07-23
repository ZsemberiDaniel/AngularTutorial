import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment7',
  templateUrl: './assignment7.component.html',
  styleUrls: ['./assignment7.component.css']
})
export class Assignment7Component implements OnInit {

  protected form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required], this.isNameValidAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable')
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  isNameValid(control: FormControl): {[s: string]: boolean} {
    if ((<string> control.value).toLowerCase() === 'test') {
      return {'noTestProject': true};
    }

    return null;
  }

  isNameValidAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((<string> control.value).toLowerCase() === 'test') {
          resolve({'noTestProject': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

}
