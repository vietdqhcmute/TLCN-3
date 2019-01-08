import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA4DesignBlue01Component } from './page-a4-design-blue01.component';

describe('PageA4DesignBlue01Component', () => {
  let component: PageA4DesignBlue01Component;
  let fixture: ComponentFixture<PageA4DesignBlue01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageA4DesignBlue01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageA4DesignBlue01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
