import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, AlertModule.forRoot()],
})
export class HomeModule {}
