import { Currency } from './../models/Currency';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Price } from '../models/Price';

@Injectable()
export class CoinbaseService {

    private endpoint = 'https://api.coinbase.com/';
    private apiVersion = 'v2';

    constructor(private http: Http) {

    }

    public getPrice(currencyPair: string, type: string): Observable<Price> {
        const url = this.endpoint + this.apiVersion + '/prices/' + currencyPair + '/' + type;
        return this.http.get(url)
            .map(response => Price.fromJson(response.json().data));
    }

    public getCurrenies(): Observable<Currency[]> {
        const url = this.endpoint + this.apiVersion + '/currencies';
        return this.http.get(url)
            .map(response => response.json().data
                .map(currency => Currency.fromJson(currency)) );
    }
}
