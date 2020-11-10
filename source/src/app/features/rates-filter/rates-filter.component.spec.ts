import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesFilterComponent } from './rates-filter.component';

describe('RatesFilterComponent', () => {
    let component: RatesFilterComponent;
    let fixture: ComponentFixture<RatesFilterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RatesFilterComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RatesFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
