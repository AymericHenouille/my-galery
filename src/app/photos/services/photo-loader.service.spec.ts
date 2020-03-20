import { TestBed } from '@angular/core/testing';

import { PhotoLoaderService } from './photo-loader.service';

describe('PhotoLoaderService', () => {
  let service: PhotoLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
