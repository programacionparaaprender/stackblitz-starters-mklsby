import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ArmsComponent } from './arms.component';

const routes: Routes = [{ path: '', component: ArmsComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ArmsRoutingModule {}
