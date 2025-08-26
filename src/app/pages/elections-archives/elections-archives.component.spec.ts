import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectionsArchivesComponent } from './elections-archives.component';

describe('ElectionsArchiveComponent', () => {
  let component: ElectionsArchivesComponent;
  let fixture: ComponentFixture<ElectionsArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionsArchivesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectionsArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
