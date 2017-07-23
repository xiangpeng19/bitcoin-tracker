import { Observable } from 'rxjs/Observable';
import { Price } from './models/Price';
import { Component, OnInit } from '@angular/core';
import { TrackerService } from './services/tracker.service';


@Component({
    selector: 'tracker',
    templateUrl: './tracker.component.html',
    styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

    private prices: Price[];

    constructor(private trackerService: TrackerService) {
        this.prices = [];
    }

    ngOnInit() {
        Observable.timer(0, 3000).subscribe(t => {
            this.trackerService.getPrice('BTC-USD', 'spot')
                .subscribe(newPrice => {
                    this.getPrices(newPrice);
                    console.log(this.prices);
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
