import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaConfirmComponent } from './dia-confirm.component';

describe('DiaConfirmComponent', () => {
  let component: DiaConfirmComponent;
  let fixture: ComponentFixture<DiaConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
