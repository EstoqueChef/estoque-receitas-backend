import { Test, TestingModule } from '@nestjs/testing';
import { ValidadeController } from './validade.controller';

describe('ValidadeController', () => {
  let controller: ValidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidadeController],
    }).compile();

    controller = module.get<ValidadeController>(ValidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
