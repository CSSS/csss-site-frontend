import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficersComponent } from './officers.component';

describe('OfficersComponent', () => {
  let component: OfficersComponent;
  let fixture: ComponentFixture<OfficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
