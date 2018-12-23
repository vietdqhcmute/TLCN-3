import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA4DesignComponent } from './page-a4-design.component';

describe('PageA4DesignComponent', () => {
  let component: PageA4DesignComponent;
  let fixture: ComponentFixture<PageA4DesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageA4DesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageA4DesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
