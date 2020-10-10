import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent,
    MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent, MenuComponent, RouterModule]
})
export class SharedModule { }
