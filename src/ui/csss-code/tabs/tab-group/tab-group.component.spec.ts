import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTabGroupComponent } from './tab-group.component';

describe('TabGroupComponent', () => {
  let component: CodeTabGroupComponent;
  let fixture: ComponentFixture<CodeTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeTabGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
