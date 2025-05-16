import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';

@NgModule({
  declarations: [NavbarComponent, NavbarItemComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [NavbarComponent, NavbarItemComponent]
})
export class CsssCodeModule {}
