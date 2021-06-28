import { TestBed } from '@angular/core/testing';

import { ApicomentariosService } from './apicomentarios.service';

describe('ApicomentariosService', () => {
  let service: ApicomentariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicomentariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
