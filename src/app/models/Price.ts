import * as moment from 'moment';

export class Price {
    amount: number;
    currency: string;
    timestamp: string;

    public static fromJson(DBprice) {
        const price = new Price();
        price.amount = DBprice.amount;
        price.currency = DBprice.currency;
        price.timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
        return price;
    }
}

