import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ErrorsComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [ErrorsComponent],
})
export class ErrorsModule {}
