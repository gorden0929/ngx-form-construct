import { TestBed } from '@angular/core/testing';

import { NgxFormConstructService } from './ngx-form-construct.service';

describe('NgxFormConstructService', () => {
  let service: NgxFormConstructService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFormConstructService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
