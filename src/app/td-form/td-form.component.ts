import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  protected defaultQuestion = 'pet';
  protected answer;
  protected genders = ['male', 'female'];

  suggestUsername() {
    // this.form.setValue({
    //   userData: {
    //     username: 'apple',
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnser: '',
    //   gender: 'male'
    // });

    this.form.form.patchValue({
      userData: {
        username: 'apple'
      }
    });
  }

  constructor() { }
  ngOnInit() { }

  onSubmit() {
    this.form.reset();
  }

}
