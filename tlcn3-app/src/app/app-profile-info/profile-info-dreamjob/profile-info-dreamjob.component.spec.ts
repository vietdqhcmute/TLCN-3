import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoDreamjobComponent } from './profile-info-dreamjob.component';

describe('ProfileInfoDreamjobComponent', () => {
  let component: ProfileInfoDreamjobComponent;
  let fixture: ComponentFixture<ProfileInfoDreamjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoDreamjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoDreamjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
