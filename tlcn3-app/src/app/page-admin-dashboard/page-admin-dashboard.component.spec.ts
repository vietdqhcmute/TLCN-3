import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminDashboardComponent } from './page-admin-dashboard.component';

describe('PageAdminDashboardComponent', () => {
  let component: PageAdminDashboardComponent;
  let fixture: ComponentFixture<PageAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
