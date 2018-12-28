import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminSidebarComponent } from './page-admin-sidebar.component';

describe('PageAdminSidebarComponent', () => {
  let component: PageAdminSidebarComponent;
  let fixture: ComponentFixture<PageAdminSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
