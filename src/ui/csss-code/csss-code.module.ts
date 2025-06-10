import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabBarComponent } from './tabbar/tabbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { ArticleComponent } from './article/article.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    ArticleComponent,
    ButtonComponent,
    CardComponent,
    NavbarComponent,
    NavbarItemComponent,
    TabBarComponent
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [
    ArticleComponent,
    ButtonComponent,
    CardComponent,
    NavbarComponent,
    NavbarItemComponent,
    TabBarComponent
  ]
})
export class CsssCodeModule {}
