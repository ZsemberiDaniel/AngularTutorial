import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  
  allowNewServer = false;
  serverName = '';
  serverCreateMsg = false;

  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000)
  }

  onCreateServer() {
    this.serverCreateMsg = true;
    this.allowNewServer = false;

    this.servers.push(this.serverName);
    this.serverName = '';

    setTimeout(() => {
      this.serverCreateMsg = false;
      this.allowNewServer = true;
    }, 1000);
  }

}
