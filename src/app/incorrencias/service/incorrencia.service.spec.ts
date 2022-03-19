import { TestBed } from '@angular/core/testing';

import { IncorrenciaService } from './incorrencia.service';

describe('IncorrenciaService', () => {
  let service: IncorrenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncorrenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
