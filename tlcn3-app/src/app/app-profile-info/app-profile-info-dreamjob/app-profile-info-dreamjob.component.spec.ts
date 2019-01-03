import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProfileInfoDreamjobComponent } from './app-profile-info-dreamjob.component';

describe('AppProfileInfoDreamjobComponent', () => {
  let component: AppProfileInfoDreamjobComponent;
  let fixture: ComponentFixture<AppProfileInfoDreamjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProfileInfoDreamjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProfileInfoDreamjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
