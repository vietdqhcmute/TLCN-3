import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaEditProfileComponent } from './dia-edit-profile.component';

describe('DiaEditProfileComponent', () => {
  let component: DiaEditProfileComponent;
  let fixture: ComponentFixture<DiaEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
