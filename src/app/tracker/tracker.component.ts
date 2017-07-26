import { CoinbaseService } from './../services/coinbase.service';
import { Observable } from 'rxjs/Observable';
import { Price } from '../models/Price';
import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../models/Currency';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-tracker',
    templateUrl: './tracker.component.html',
    styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

    private prices: Price[];
    private currencies: Currency[];

    private selectedCurrency: Currency;
    private subscription: Subscription;

    constructor(private coinbaseService: CoinbaseService) {
        this.prices = [];
        this.currencies = [];
        this.subscription = new Subscription();
    }

    ngOnInit() {
        this.subscribe('USD');
        this.coinbaseService.getCurrenies()
            .subscribe(currencies => {
                this.currencies = currencies;
            });
    }

    private getPrices(newPrice) {
        if (this.prices.length >= 10) {
            this.prices.shift();
        }
        this.prices.push(newPrice);
    }

    private subscribe(currency: string) {
        const currencyPair = 'BTC-' + currency;
        this.subscription = (Observable.timer(0, 3000).subscribe(t => {
            this.coinbaseService.getPrice(currencyPair, 'spot')
                .subscribe(newPrice => {
                    this.getPrices(newPrice);
                });
        }));
    }

    public onCurrencyChange() {
        this.subscription.unsubscribe();
        this.subscribe(this.selectedCurrency.id);
    }

}
