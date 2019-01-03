import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProfileInfoNewfeedComponent } from './app-profile-info-newfeed.component';

describe('AppProfileInfoNewfeedComponent', () => {
  let component: AppProfileInfoNewfeedComponent;
  let fixture: ComponentFixture<AppProfileInfoNewfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProfileInfoNewfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProfileInfoNewfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
