import { TestBed } from '@angular/core/testing';

import { NewfeedService } from './newfeed.service';

describe('NewfeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewfeedService = TestBed.get(NewfeedService);
    expect(service).toBeTruthy();
  });
});
