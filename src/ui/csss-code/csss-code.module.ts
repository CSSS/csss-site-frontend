import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabBarComponent } from './tabbar/tabbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { ArticleComponent } from './article/article.component';
import { ClassComponent } from './article/class/class.component';
import { FunctionComponent } from './article/function/function.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarItemComponent,
    TabBarComponent,
    ArticleComponent,
    ClassComponent,
    FunctionComponent,
    ButtonComponent
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    NavbarComponent,
    NavbarComponent,
    NavbarItemComponent,
    TabBarComponent,
    ArticleComponent,
    ClassComponent,
    ButtonComponent
  ]
})
export class CsssCodeModule {}
