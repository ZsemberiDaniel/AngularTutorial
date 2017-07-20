import { Component, Input } from '@angular/core';
import { ServerType } from '../serverType.enum';
import { Server } from '../server.model';

@Component({
  selector: 'app-servernew-element',
  templateUrl: './servernew-element.component.html',
  styleUrls: ['./servernew-element.component.css']
})
export class ServernewElementComponent {

  @Input() element: Server;

  constructor() { }
  
  isTypeServer() { return this.element.type == ServerType.Server; }
  isTypeBlueprint() { return this.element.type == ServerType.Blueprint; }
  
}
