import { TestBed } from '@angular/core/testing';

import { GroupeCompService } from './groupe-comp.service';

describe('GroupeCompService', () => {
  let service: GroupeCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
