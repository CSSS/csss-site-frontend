import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTabComponent } from './tab.component';

describe('CodeTabComponent', () => {
  let component: CodeTabComponent;
  let fixture: ComponentFixture<CodeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeTabComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
