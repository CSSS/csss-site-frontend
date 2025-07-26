import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleComponent } from './article/article.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from '@csss-code/tabs/tabs.component';

@NgModule({
  declarations: [
    ArticleComponent,
    ButtonComponent,
    CardComponent,
    TabsComponent
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [
    ArticleComponent,
    ButtonComponent,
    CardComponent,
    TabsComponent
  ]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CsssCodeModule {}
