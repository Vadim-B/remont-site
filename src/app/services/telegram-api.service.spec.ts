import { TestBed } from '@angular/core/testing';

import { TelegramApiService } from './telegram-api.service';

describe('TelegramApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelegramApiService = TestBed.get(TelegramApiService);
    expect(service).toBeTruthy();
  });
});
