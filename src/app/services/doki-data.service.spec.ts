import { TestBed } from '@angular/core/testing';

import { DokiDataService } from './doki-data.service';

describe('DokiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DokiDataService = TestBed.get(DokiDataService);
    expect(service).toBeTruthy();
  });
});
