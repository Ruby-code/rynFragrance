import { Module } from '@nestjs/common';
import { FragranceService } from '../../SERVICES/fragrance/fragrance.service';
import { FragranceController } from '../../CONTROLLERS/fragrance/fragrance.controller';
import { Fragrance } from 'src/fragrance/Entity/fragrance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Fragrance])],
  exports: [TypeOrmModule],
  controllers: [FragranceController],
  providers: [FragranceService]
})
export class FragranceModule {}
