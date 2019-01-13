import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';

describe('CardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeckService = TestBed.get(DeckService);
    expect(service).toBeTruthy();
  });
});
