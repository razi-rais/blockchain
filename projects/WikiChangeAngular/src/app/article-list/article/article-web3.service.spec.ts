import { TestBed, inject } from '@angular/core/testing';

import { ArticleWeb3Service } from './article-web3.service';

describe('ArticleWeb3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleWeb3Service]
    });
  });

  it('should be created', inject([ArticleWeb3Service], (service: ArticleWeb3Service) => {
    expect(service).toBeTruthy();
  }));
});
