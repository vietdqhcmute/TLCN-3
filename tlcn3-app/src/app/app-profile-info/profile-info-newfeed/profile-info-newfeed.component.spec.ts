import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoNewfeedComponent } from './profile-info-newfeed.component';

describe('ProfileInfoNewfeedComponent', () => {
  let component: ProfileInfoNewfeedComponent;
  let fixture: ComponentFixture<ProfileInfoNewfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoNewfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoNewfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
