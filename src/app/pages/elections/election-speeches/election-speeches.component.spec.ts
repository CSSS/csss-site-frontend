import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionSpeechesComponent } from './election-speeches.component';

describe('ElectionSpeechesComponent', () => {
  let component: ElectionSpeechesComponent;
  let fixture: ComponentFixture<ElectionSpeechesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionSpeechesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionSpeechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
