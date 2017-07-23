export class Price {
    amount: number;
    currency: string;
    timestamp: Date;

    public static fromJson(DBprice) {
        const price = new Price();
        price.amount = DBprice.amount;
        price.currency = DBprice.currency;
        price.timestamp = new Date();
        return price;
    }
}

