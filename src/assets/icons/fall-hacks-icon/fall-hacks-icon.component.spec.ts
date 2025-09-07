import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallHacksIconComponent } from './fall-hacks-icon.component';

describe('FallHacksIconComponent', () => {
  let component: FallHacksIconComponent;
  let fixture: ComponentFixture<FallHacksIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FallHacksIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FallHacksIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
