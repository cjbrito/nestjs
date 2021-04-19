import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';


@Module({
  imports: [ 
    TypeOrmModule.forRoot({
        "type": "mysql",
        "host": "db",
        "port": 3306,
        "username": "root",
        "password": "root",
        "database": "crud",
        "entities": ["dist/**/*.entity{.ts,.js}"],
        "synchronize": true,
        "autoLoadEntities": true
      }
    ),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
