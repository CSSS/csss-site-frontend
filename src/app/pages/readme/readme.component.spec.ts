import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMeComponent } from './readme.component';

describe('ReadmeComponent', () => {
  let component: ReadMeComponent;
  let fixture: ComponentFixture<ReadMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadMeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
