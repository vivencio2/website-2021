import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';

const approutes: Routes = [{
  path:'',
  loadChildren: ()=> import('./home/home.module').then(m=> m.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(approutes, {preloadingStrategy: PreloadAllModules}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
