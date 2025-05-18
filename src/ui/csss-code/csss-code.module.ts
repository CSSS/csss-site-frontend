import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabBarComponent } from './tabbar/tabbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [NavbarComponent, NavbarItemComponent, TabBarComponent, ContentComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    NavbarComponent,
    NavbarComponent,
    NavbarItemComponent,
    TabBarComponent,
    ContentComponent
  ]
})
export class CsssCodeModule {}
