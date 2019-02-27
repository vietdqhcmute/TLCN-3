import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterSideBarComponent } from './recruiter-side-bar.component';

describe('RecruiterSideBarComponent', () => {
  let component: RecruiterSideBarComponent;
  let fixture: ComponentFixture<RecruiterSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
