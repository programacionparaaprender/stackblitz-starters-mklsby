import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArmsComponent } from './arms.component';
import { ArmsRoutingModule } from './arms-routing.module';
@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [ArmsComponent],
	imports: [CommonModule, BrowserModule, BrowserAnimationsModule, ArmsRoutingModule],
	exports: [ArmsComponent]
})
export class ArmsModule {}
