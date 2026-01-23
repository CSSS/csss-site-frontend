import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: CodeButtonComponent;
  let fixture: ComponentFixture<CodeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
