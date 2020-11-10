import { ExchangeRate } from '@app/shared/models';
import { RATES_DATA } from 'mocks/data';
import { from, Observable } from 'rxjs';

export class ExchangeRateServiceMock {
    public rateData: ReadonlyArray<ExchangeRate>;

    public constructor() {
        this.rateData = RATES_DATA;
    }

    public getExchangeRates(): Observable<ReadonlyArray<ExchangeRate>> {
        return from(
            new Promise<ReadonlyArray<ExchangeRate>>(resolve => resolve(this.rateData))
        );
    }
}
