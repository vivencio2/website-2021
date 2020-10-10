import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const aboutroutes: Routes = [{
  path: '',
  component: AboutComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(aboutroutes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
