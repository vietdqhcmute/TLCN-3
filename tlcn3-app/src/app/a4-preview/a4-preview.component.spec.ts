import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A4PreviewComponent } from './a4-preview.component';

describe('A4PreviewComponent', () => {
  let component: A4PreviewComponent;
  let fixture: ComponentFixture<A4PreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A4PreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A4PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
