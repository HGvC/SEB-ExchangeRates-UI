import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRate } from '@app/shared/models';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ExchangeRateService {
    public constructor(private readonly httpClient: HttpClient) {}

    public getExchangeRates(date: string): Observable<ReadonlyArray<ExchangeRate>> {
        const url = `${environment.exchangeRateUrl}/Get?date=${date}`;
        return this.httpClient.get<ReadonlyArray<ExchangeRate>>(url);
    }
}
