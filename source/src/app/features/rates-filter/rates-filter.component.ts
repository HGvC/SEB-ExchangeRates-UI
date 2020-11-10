import { Component } from '@angular/core';
import { ExchangeRateService } from '@app/core/services';
import { ExchangeRate } from '@app/shared/models';

@Component({
    selector: 'app-rates-filter',
    templateUrl: './rates-filter.component.html',
    styleUrls: ['./rates-filter.component.scss']
})
export class RatesFilterComponent {
    public maxDate;
    public selectedDate: Date;
    public exchangeRates: Array<ExchangeRate>;

    constructor(private readonly exchangeRateService: ExchangeRateService) {
        this.maxDate = new Date(2014, 11, 31);
    }

    public myFilter = (d: Date | null): boolean => {
        const now = new Date();
        now.setMonth(now.getMonth());
        now.setDate(now.getDate() - 1);
        return (d || new Date()) > now;
    };
    public onProceedClick(): void {
        this.exchangeRateService.getExchangeRates(this.selectedDate.toLocaleDateString('lt-LT')).subscribe(rates => {
            this.exchangeRates = [...rates];
        });
    }
}
