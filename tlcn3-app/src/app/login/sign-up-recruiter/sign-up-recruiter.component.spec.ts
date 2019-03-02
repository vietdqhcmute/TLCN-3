import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpRecruiterComponent } from './sign-up-recruiter.component';

describe('SignUpRecruiterComponent', () => {
  let component: SignUpRecruiterComponent;
  let fixture: ComponentFixture<SignUpRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
