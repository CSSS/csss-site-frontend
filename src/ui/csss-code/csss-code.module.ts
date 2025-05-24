import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabBarComponent } from './tabbar/tabbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { ArticleComponent } from './article/article.component';
import { TabItemComponent } from './tabbar/tab-item/tab-item.component';
import { ClassComponent } from './article/class/class.component';
import { FunctionComponent } from './article/function/function.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarItemComponent,
    TabBarComponent,
    ArticleComponent,
    TabItemComponent,
    ClassComponent,
    FunctionComponent
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    NavbarComponent,
    NavbarComponent,
    NavbarItemComponent,
    TabBarComponent,
    ArticleComponent,
    ClassComponent
  ]
})
export class CsssCodeModule {}
