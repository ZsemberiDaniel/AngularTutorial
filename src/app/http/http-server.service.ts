import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('https://ng-tutorial-http-e3efa.firebaseio.com/data1.json', servers, { headers: headers });
    }

    getServers() {
        return this.http.get('https://ng-tutorial-http-e3efa.firebaseio.com/data1.json')
                .map((response: Response) => {
                    return response.json();
                })
                .catch((error) => {
                    return Observable.throw('Something went wrong');
                });
    }

    getAppName() {
        return this.http.get('https://ng-tutorial-http-e3efa.firebaseio.com/appName.json')
                .map((response: Response) => {
                    return response.json();
                });
    }
}
