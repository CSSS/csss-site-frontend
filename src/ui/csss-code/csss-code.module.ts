import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabBarComponent } from './tabbar/tabbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { ArticleComponent } from './article/article.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarItemComponent,
    TabBarComponent,
    ArticleComponent,
    ButtonComponent
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [
    NavbarComponent,
    NavbarItemComponent,
    TabBarComponent,
    ArticleComponent,
    ButtonComponent
  ]
})
export class CsssCodeModule {}
