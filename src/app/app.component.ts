import { Currency } from './models/Currency';
import { CoinbaseService } from './services/coinbase.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private currencies: Currency[];
    constructor(private coinbaseService: CoinbaseService) {
        this.currencies = [];
    }

    ngOnInit() {
        this.coinbaseService.getCurrenies()
            .subscribe(currencies => {
                console.log(currencies);
                this.currencies = currencies;
            });
    }

}
