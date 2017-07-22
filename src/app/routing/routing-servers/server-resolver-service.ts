import { RoutingServersService } from './routing-servers.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ServerResolver implements Resolve<{id: number, name: string, status: string}> {

    constructor(private serverService: RoutingServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
            { id: number; name: string; status: string; } |
            Observable<{ id: number; name: string; status: string; }> |
            Promise<{ id: number; name: string; status: string; }> {
        return this.serverService.getServer(+route.params['id']);
    }

}
