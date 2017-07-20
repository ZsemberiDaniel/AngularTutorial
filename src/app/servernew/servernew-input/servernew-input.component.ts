import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../server.model';
import { ServerType } from '../serverType.enum';

@Component({
  selector: 'app-servernew-input',
  templateUrl: './servernew-input.component.html',
  styleUrls: ['./servernew-input.component.css']
})
export class ServernewInputComponent {

  @Output() serverCreated = new EventEmitter<Server>();

  serverName = "Server name";
  serverContent = "Server content";

  // We get the input via local reference
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  onAddServer() {
    this.serverCreated.emit(new Server(this.serverName, this.serverContent, ServerType.Server));
  }

  onAddBlueprint() {
    this.serverCreated.emit(new Server(this.serverName, this.serverContent, ServerType.Blueprint));
  }

}
