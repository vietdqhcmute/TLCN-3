import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaProjectComponent } from './dia-project.component';

describe('DiaProjectComponent', () => {
  let component: DiaProjectComponent;
  let fixture: ComponentFixture<DiaProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
