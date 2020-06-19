import { TestBed } from '@angular/core/testing';

import { CanciondeezzerService } from './canciondeezzer.service';

describe('CanciondeezzerService', () => {
  let service: CanciondeezzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanciondeezzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
