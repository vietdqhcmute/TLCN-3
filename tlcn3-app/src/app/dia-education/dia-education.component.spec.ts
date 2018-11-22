import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaEducationComponent } from './dia-education.component';

describe('DiaEducationComponent', () => {
  let component: DiaEducationComponent;
  let fixture: ComponentFixture<DiaEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
