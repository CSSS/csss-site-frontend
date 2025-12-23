import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeListItem, CodeListItemComponent } from './list-item.component';

interface DummyItem extends CodeListItem<DummyItem> {
  foo?: 'bar';
}

describe('NavbarItemItemComponent', () => {
  let component: CodeListItemComponent<DummyItem>;
  let fixture: ComponentFixture<CodeListItemComponent<DummyItem>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeListItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
