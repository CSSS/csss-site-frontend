import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: CodeArticleComponent;
  let fixture: ComponentFixture<CodeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeArticleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
