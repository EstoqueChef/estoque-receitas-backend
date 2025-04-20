import { Test, TestingModule } from '@nestjs/testing';
import { ValidadeService } from './validade.service';

describe('ValidadeService', () => {
  let service: ValidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidadeService],
    }).compile();

    service = module.get<ValidadeService>(ValidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
