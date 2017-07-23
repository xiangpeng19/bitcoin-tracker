export class Currency {
    id: string;
    name: string;
    min_size: string;

    public static fromJson(DBcurrency) {
        const currency = new Currency();
        currency.id = DBcurrency.id;
        currency.name = DBcurrency.name;
        currency.min_size = DBcurrency.min_size;
        return currency;
    }
}

