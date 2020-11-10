import { ExchangeRate } from '@app/shared/models';

export const RATES_DATA: ReadonlyArray<ExchangeRate> = [
    {
        date: new Date(2012, 10, 10),
        currencyCode: 'AZN',
        quantity: 1,
        rate: 0.0,
        unit: 'LTL per 1 currency unit'
    },
    {
        date: new Date(2012, 10, 10),
        currencyCode: 'BAM',
        quantity: 1,
        rate: 0.0,
        unit: 'LTL per 1 currency unit'
    },
    {
        date: new Date(2012, 10, 10),
        currencyCode: 'BDT',
        quantity: 100,
        rate: 0.0,
        unit: 'LTL per 100 currency units'
    }
];
