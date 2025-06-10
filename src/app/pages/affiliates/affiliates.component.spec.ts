import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesComponent } from './affiliates.component';

describe('AffiliatesComponent', () => {
  let component: AffiliatesComponent;
  let fixture: ComponentFixture<AffiliatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffiliatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
