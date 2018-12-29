import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminNotificationComponent } from './page-admin-notification.component';

describe('PageAdminNotificationComponent', () => {
  let component: PageAdminNotificationComponent;
  let fixture: ComponentFixture<PageAdminNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
