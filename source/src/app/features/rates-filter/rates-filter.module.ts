import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExchangeRateService } from '@app/core/services';
import { SharedModule } from '@app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { RatesFilterComponent } from './rates-filter.component';
import { RatesGridComponent } from './rates-grid/rates-grid.component';

@NgModule({
    declarations: [RatesFilterComponent, RatesGridComponent],
    exports: [RatesFilterComponent],
    providers: [ExchangeRateService, DatePipe],
    imports: [CommonModule, SharedModule, AgGridModule.withComponents([RatesGridComponent])]
})
export class RatesFilterModule {}
