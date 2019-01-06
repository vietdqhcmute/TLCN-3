import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA4DesignBlueComponent } from './page-a4-design-blue.component';

describe('PageA4DesignBlueComponent', () => {
  let component: PageA4DesignBlueComponent;
  let fixture: ComponentFixture<PageA4DesignBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageA4DesignBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageA4DesignBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
