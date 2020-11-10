import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ExchangeRateService } from '@app/core/services';
import { ExchangeRateServiceMock } from 'mocks/services/exchange-rate.service.mock';
import { RatesFilterComponent } from './rates-filter.component';

describe('RatesFilterComponent', () => {
    let component: RatesFilterComponent;
    let fixture: ComponentFixture<RatesFilterComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RatesFilterComponent]
        })
            .overrideComponent(RatesFilterComponent, {
                set: {
                    providers: [{ provide: ExchangeRateService, useClass: ExchangeRateServiceMock }]
                }
            })
            .compileComponents();

        fixture = TestBed.createComponent(RatesFilterComponent);
        component = fixture.componentInstance;
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RatesFilterComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call exchange service on proceed click', () => {
        const exchangeRateServiceMock = fixture.debugElement.injector.get(ExchangeRateService);
        const exchangeRateServiceSpy = spyOn(exchangeRateServiceMock, 'getExchangeRates');
        component.selectedDate = new Date(2012, 12, 12);
        fixture.detectChanges();

        const proceedButton = debugElement.query(By.css('button'));
        proceedButton.nativeElement.click();
        fixture.detectChanges();

        expect(exchangeRateServiceSpy).toHaveBeenCalled();
    });

    it('should display disabled proceed button on initial load', () => {
        const proceedButton = debugElement.query(By.css('button'));
        fixture.detectChanges();

        expect(proceedButton.nativeElement.disabled).toBeTruthy();
    });
});
