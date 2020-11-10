import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        FormsModule,
        MatSnackBarModule,
        MatButtonModule
    ],
    exports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, FormsModule, MatSnackBarModule, MatButtonModule]
})
export class SharedModule {}
