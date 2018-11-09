import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGetInfoComponent } from './page-get-info.component';

describe('PageGetInfoComponent', () => {
  let component: PageGetInfoComponent;
  let fixture: ComponentFixture<PageGetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
