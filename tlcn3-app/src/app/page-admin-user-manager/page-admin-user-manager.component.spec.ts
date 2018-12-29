import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminUserManagerComponent } from './page-admin-user-manager.component';

describe('PageAdminUserManagerComponent', () => {
  let component: PageAdminUserManagerComponent;
  let fixture: ComponentFixture<PageAdminUserManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminUserManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminUserManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
