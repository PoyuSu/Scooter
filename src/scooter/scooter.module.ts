import { Module } from '@nestjs/common';
import { ScooterController } from './scooter.controller';
import { ScooterService } from './scooter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scooter } from './scooter.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Scooter])
  ],
  controllers: [ScooterController],
  providers: [ScooterService]
})
export class ScooterModule {}
