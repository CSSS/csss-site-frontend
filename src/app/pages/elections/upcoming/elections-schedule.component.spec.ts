import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionsScheduleComponent } from './elections-schedule.component';

describe('UpcomingComponent', () => {
  let component: ElectionsScheduleComponent;
  let fixture: ComponentFixture<ElectionsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionsScheduleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectionsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
