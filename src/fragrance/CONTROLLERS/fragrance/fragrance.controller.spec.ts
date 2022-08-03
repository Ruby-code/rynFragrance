import { Test, TestingModule } from '@nestjs/testing';
import { FragranceController } from './fragrance.controller';
import { FragranceService } from '../../SERVICES/fragrance/fragrance.service';

describe('FragranceController', () => {
  let controller: FragranceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FragranceController],
      providers: [FragranceService],
    }).compile();

    controller = module.get<FragranceController>(FragranceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
