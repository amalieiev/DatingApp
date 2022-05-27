import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [NavComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [NavComponent],
})
export class NavModule {}
