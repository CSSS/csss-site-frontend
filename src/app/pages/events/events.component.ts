import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeArticleComponent } from '@csss-code/article/article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { ExternalLinkComponent } from 'components/url/external-link/external-link.component';
import { EXTERNAL_LINKS } from 'components/url/links.data';
import { DateAdapter, provideCalendar, CalendarPreviousViewDirective, CalendarTodayDirective, CalendarNextViewDirective, CalendarMonthViewComponent, CalendarWeekViewComponent, CalendarDayViewComponent, CalendarEvent, CalendarView, CalendarDatePipe } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@Component({
  selector: 'cs-events',
  imports: [CodeArticleComponent, FontAwesomeModule, ExternalLinkComponent, CalendarPreviousViewDirective, CalendarTodayDirective, CalendarNextViewDirective, CalendarMonthViewComponent, CalendarWeekViewComponent, CalendarDayViewComponent, CalendarDatePipe],
  providers: [
    provideCalendar({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
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
      title: 'CSSS Events',
    },
  ];

  setView(view: CalendarView) {
    this.view = view;
  }
}
