import { RoutingServersService } from './routing-servers/routing-servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
  providers: [RoutingServersService]
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
