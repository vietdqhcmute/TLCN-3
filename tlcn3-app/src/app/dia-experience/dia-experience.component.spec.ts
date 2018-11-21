import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaExperienceComponent } from './dia-experience.component';

describe('DiaExperienceComponent', () => {
  let component: DiaExperienceComponent;
  let fixture: ComponentFixture<DiaExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
