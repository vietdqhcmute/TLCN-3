import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA4DefaultComponent } from './page-a4-default.component';

describe('PageA4DefaultComponent', () => {
  let component: PageA4DefaultComponent;
  let fixture: ComponentFixture<PageA4DefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageA4DefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageA4DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
