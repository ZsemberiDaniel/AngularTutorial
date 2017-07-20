import { A5User } from './a5-user.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-a5-user',
  templateUrl: './a5-user.component.html'
})
export class A5UserComponent {

  @Input() user: A5User;

}
