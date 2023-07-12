import { TestBed } from '@angular/core/testing';

import { OpenCloseModelService } from './open-close-model.service';

describe('OpenCloseModelService', () => {
  let service: OpenCloseModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenCloseModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
