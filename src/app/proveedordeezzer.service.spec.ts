import { TestBed } from '@angular/core/testing';

import { ProveedordeezzerService } from './proveedordeezzer.service';

describe('ProveedordeezzerService', () => {
  let service: ProveedordeezzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedordeezzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
