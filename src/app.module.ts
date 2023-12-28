import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot(),
    CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
