import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { ExchangeRate } from '@app/shared/models';
import { GridApi, GridOptions } from 'ag-grid-community';

@Component({
    selector: 'app-rates-grid',
    templateUrl: './rates-grid.component.html',
    styleUrls: ['./rates-grid.component.scss']
})
export class RatesGridComponent implements OnChanges {
    @Input() public exchangeRates: Array<ExchangeRate>;
    public gridOptions: GridOptions;
    public rowData: Array<any>;
    public columnDefs: Array<any>;
    private api: GridApi;

    constructor(public datePipe: DatePipe) {}

    public ngOnChanges(): void {
        this.gridOptions = {};
        this.rowData = this.createRowData();
        this.columnDefs = this.createColumnDefs();
    }

    public onReady(params: any): void {
        this.api = params.api;
        this.api.sizeColumnsToFit();
    }

    public createRowData(): Array<any> {
        return this.exchangeRates.map(rates => ({
            currencyCode: rates.currencyCode,
            date: this.datePipe.transform(rates.date, 'yyyy-MM-dd'),
            quantity: rates.quantity,
            rate: rates.rate,
            unit: rates.unit
        }));
    }

    public createColumnDefs(): Array<any> {
        const columns = ['currencyCode', 'date', 'quantity', 'rate', 'unit'];

        return [
            ...columns.map(column => ({
                headerName: column,
                field: column,
                sortable: true,
                filter: 'agTextColumnFilter'
            }))
        ];
    }
}
