import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesGridComponent } from './rates-grid.component';

describe('RatesGridComponent', () => {
    let component: RatesGridComponent;
    let fixture: ComponentFixture<RatesGridComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RatesGridComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RatesGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
