export class ExchangeRate {
    constructor(public date: Date, public currencyCode: string, public quantity: number, public rate: number, public unit: string) {}

    public static fromAny(item: any): ExchangeRate {
        if (!item) {
            return null;
        }

        return {
            date: item.date,
            currencyCode: item.currencyCode,
            quantity: item.quantity,
            rate: item.rate,
            unit: item.unit
        };
    }
}
