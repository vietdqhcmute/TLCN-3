import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFrameComponent } from './job-frame.component';

describe('JobFrameComponent', () => {
  let component: JobFrameComponent;
  let fixture: ComponentFixture<JobFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
