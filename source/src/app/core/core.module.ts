import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ExchangeRateService } from './services';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [ExchangeRateService]
})
export class CoreModule {}
