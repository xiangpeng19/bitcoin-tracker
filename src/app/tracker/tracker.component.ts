import { CoinbaseService } from './../services/coinbase.service';
import { Observable } from 'rxjs/Observable';
import { Price } from '../models/Price';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-tracker',
    templateUrl: './tracker.component.html',
    styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

    private prices: Price[];

    constructor(private coinBaseService: CoinbaseService) {
        this.prices = [];
    }

    ngOnInit() {
        Observable.timer(0, 3000).subscribe(t => {
            this.coinBaseService.getPrice('BTC-USD', 'spot')
                .subscribe(newPrice => {
                    this.getPrices(newPrice);
                });
        });
    }

    private getPrices(newPrice) {
        if (this.prices.length >= 10) {
            this.prices.shift();
        }
        this.prices.push(newPrice);
    }

}
