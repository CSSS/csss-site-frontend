import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonRoomComponent } from './common-room.component';

describe('CommonRoomComponent', () => {
  let component: CommonRoomComponent;
  let fixture: ComponentFixture<CommonRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonRoomComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
