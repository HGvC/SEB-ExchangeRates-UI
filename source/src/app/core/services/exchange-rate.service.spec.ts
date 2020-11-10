import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ExchangeRate } from '@app/shared/models';
import { RATES_DATA } from 'mocks/data/rates.data';
import { ExchangeRateService } from './exchange-rate.service';

describe(`CatalogPermissionService`, () => {
    const baseUrl = 'https://localhost:44376/api/ExchangeRates';
    const date = '2012-12-12';
    let service: ExchangeRateService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ExchangeRateService],
            imports: [HttpClientTestingModule]
        });

        service = TestBed.inject(ExchangeRateService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    describe(`getExchangeRates`, () => {
        it(`should call exchange rates endpoint with get`, () => {
            service.getExchangeRates(date).subscribe();

            const mockCall = httpMock.expectOne(`${baseUrl}/Get?date=${date}`);
            expect(mockCall.request.method).toBe('GET');
        });

        it(`should serialize empty collection for exchange rates`, done => {
            const expectedResult: ReadonlyArray<ExchangeRate> = [];

            service.getExchangeRates(date).subscribe(response => {
                expect(response).toEqual(expectedResult);
                done();
            });

            httpMock.expectOne(`${baseUrl}/Get?date=${date}`).flush([]);
        });

        it('should serialize non-empty collection for exchange rates', done => {
            const mockResponse = RATES_DATA;
            const expectedResult = RATES_DATA;

            service.getExchangeRates(date).subscribe(response => {
                expect(response).toEqual(expectedResult);
                done();
            });

            httpMock.expectOne(`${baseUrl}/Get?date=${date}`).flush(mockResponse);
        });
    });
});
