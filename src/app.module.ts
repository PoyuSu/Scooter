import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Scooter } from './scooter/scooter.entity';
import { ScooterModule } from './scooter/scooter.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/scooter2.db',
      entities: [Scooter],
      synchronize: true,
      logging: true,
    }),
    ScooterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
