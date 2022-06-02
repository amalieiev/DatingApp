import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
    declarations: [NavComponent],
    imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, BsDropdownModule.forRoot()],
    exports: [NavComponent],
})
export class NavModule {}
