import { TestBed } from '@angular/core/testing';

import { EliminaConfermaService } from './elimina-conferma.service';

describe('EliminaConfermaServiceService', () => {
  let service: EliminaConfermaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminaConfermaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
