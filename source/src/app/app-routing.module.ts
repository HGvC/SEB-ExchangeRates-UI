import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatesFilterComponent } from './features/rates-filter/rates-filter.component';

const routes: Routes = [{ path: '', component: RatesFilterComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
