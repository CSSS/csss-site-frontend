import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleComponent } from './article/article.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabBarComponent } from './tabbar/tabbar.component';

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
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CsssCodeModule {}
