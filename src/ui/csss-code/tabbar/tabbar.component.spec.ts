import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarComponent } from './tabbar.component';

describe('TabbarComponent', () => {
  let component: TabbarComponent;
  let fixture: ComponentFixture<TabbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
