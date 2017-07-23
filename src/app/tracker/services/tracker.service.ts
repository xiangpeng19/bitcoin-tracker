import { Price } from './../models/Price';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class TrackerService {

    private endpoint = 'https://api.coinbase.com/';
    private apiVersion = 'v2';

    constructor(private http: Http) {

    }

    public getPrice(currencyPair: string, type: string) {
        const url = this.endpoint + this.apiVersion + '/prices/' + currencyPair + '/' + type;
        return this.http.get(url)
            .map(response => Price.fromJson(response.json().data));
    }

}
