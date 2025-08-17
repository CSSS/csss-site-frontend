import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLinkComponent } from './email-link.component';

describe('EmailLinkComponent', () => {
  let component: EmailLinkComponent;
  let fixture: ComponentFixture<EmailLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
