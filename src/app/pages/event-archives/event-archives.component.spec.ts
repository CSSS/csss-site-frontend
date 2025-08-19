import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventArchivesComponent } from './event-archives.component';

describe('EventsArchiveComponent', () => {
  let component: EventArchivesComponent;
  let fixture: ComponentFixture<EventArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventArchivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
