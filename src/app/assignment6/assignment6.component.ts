import { NgForm } from '@angular/forms';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styles: ['input.ng-invalid.ng-touched { border: 1px solid red; }']
})
export class Assignment6Component implements OnInit {

  @ViewChild('f') form: NgForm;
  protected defaultEmail = 'test@test.com';
  protected defaultSubscriptionPlan = 'advanced';

  ngOnInit() { }

  onSubmit() {
    console.log(this.form.value);
  }
}
