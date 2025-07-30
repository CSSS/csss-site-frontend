import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTabsComponent } from './tabs.component';

describe('CodeTabsComponent', () => {
  let component: CodeTabsComponent;
  let fixture: ComponentFixture<CodeTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeTabsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
