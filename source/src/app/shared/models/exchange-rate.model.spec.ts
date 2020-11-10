import { ExchangeRate } from './exchange-rate.mode';

describe('Exchange rate', () => {
    it('should create using constructor', () => {
        const rate = new ExchangeRate(new Date(2012, 12, 12), 'RUR', 1, 1, '1 LTL');

        expect(rate).toBeDefined();
        expect(rate.currencyCode).toBe('RUR');
        expect(rate.quantity).toBe(1);
        expect(rate.rate).toBe(1);
        expect(rate.unit).toEqual('1 LTL');
    });

    it('should create using fromAny', () => {
        const item = {
            date: new Date(2012, 12, 12),
            currencyCode: 'RUR',
            quantity: 1,
            rate: 1,
            unit: '1 LTL'
        };

        const rate = ExchangeRate.fromAny(item);

        expect(rate).toBeDefined();
        expect(rate.currencyCode).toBe('RUR');
        expect(rate.quantity).toBe(1);
        expect(rate.rate).toBe(1);
        expect(rate.unit).toEqual('1 LTL');
    });
});
