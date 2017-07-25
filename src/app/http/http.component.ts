import { HttpServerService } from './http-server.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [HttpServerService]
})
export class HttpComponent implements OnInit {

  servers = [];
  appName = this.serversService.getAppName();

  constructor(private serversService: HttpServerService) {}

  ngOnInit() {
    this.serversService.getServers().subscribe(
      (servers: any[]) => {
        servers.forEach((value) => this.servers.push(value));
      }
    );
  }

  onSave() {
    this.serversService.storeServers(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
