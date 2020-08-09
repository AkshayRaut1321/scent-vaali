import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [SidebarComponent, LayoutComponent, TopbarComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }