import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabbarComponent } from './tabbar/tabbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';

@NgModule({
  declarations: [NavbarComponent, NavbarItemComponent, TabbarComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [NavbarComponent, NavbarComponent, NavbarItemComponent, TabbarComponent]
})
export class CsssCodeModule {}
