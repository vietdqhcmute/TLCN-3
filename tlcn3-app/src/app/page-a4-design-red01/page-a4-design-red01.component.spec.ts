import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA4DesignRed01Component } from './page-a4-design-red01.component';

describe('PageA4DesignRed01Component', () => {
  let component: PageA4DesignRed01Component;
  let fixture: ComponentFixture<PageA4DesignRed01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageA4DesignRed01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageA4DesignRed01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
