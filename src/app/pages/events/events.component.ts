import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeArticleComponent } from '@csss-code/article/article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {
  CalendarDatePipe,
  CalendarDayViewComponent,
  CalendarEvent,
  CalendarMonthViewComponent,
  CalendarNextViewDirective,
  CalendarPreviousViewDirective,
  CalendarTodayDirective,
  CalendarView,
  CalendarWeekViewComponent,
  DateAdapter,
  provideCalendar
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ExternalLinkComponent } from 'components/url/external-link/external-link.component';
import { EXTERNAL_LINKS } from 'components/url/links.data';

@Component({
  selector: 'cs-events',
  imports: [
    CodeArticleComponent,
    FontAwesomeModule,
    ExternalLinkComponent,
    CalendarPreviousViewDirective,
    CalendarTodayDirective,
    CalendarNextViewDirective,
    CalendarMonthViewComponent,
    CalendarWeekViewComponent,
    CalendarDayViewComponent,
    CalendarDatePipe
  ],
  providers: [
    provideCalendar({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent {
  externalLinkIcon = faUpRightFromSquare;
  roomFinderLink = EXTERNAL_LINKS['boardgameRoomMap'];

  readonly CalendarView = CalendarView;
  view: CalendarView = CalendarView.Month;

  // By 'Open' they mean expanded.
  activeDayIsOpen = false;
  closeOpenMonthViewDay(): void {
    this.activeDayIsOpen = false;
  }

  viewDate = new Date();
  events: CalendarEvent[] = [
    {
      start: new Date(),
      title: 'CSSS Events'
    }
  ];

  setView(view: CalendarView): void {
    this.view = view;
  }
}
