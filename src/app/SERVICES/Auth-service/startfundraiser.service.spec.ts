import { TestBed } from '@angular/core/testing';

import { StartfundraiserService } from './startfundraiser.service';

describe('StartfundraiserService', () => {
  let service: StartfundraiserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartfundraiserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
