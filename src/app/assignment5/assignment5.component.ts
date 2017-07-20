import { UsersService } from './users.service';
import { A5User } from './a5-user/a5-user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styles: ['h2 { font-weight: bold; }'],
  providers: [UsersService]
})
export class Assignment5Component {

  constructor(protected usersService: UsersService) { }

}
