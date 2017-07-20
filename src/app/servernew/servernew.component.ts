import { Component } from '@angular/core';
import { ServerType } from './serverType.enum';
import { Server } from './server.model';

@Component({
  selector: 'app-servernew',
  templateUrl: './servernew.component.html',
  styleUrls: ['./servernew.component.css']
})
export class ServernewComponent {

  serverElements: Server[] = [];

  constructor() { }

  onAdded(server) {
    this.serverElements.push(server);
  }

}
