import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/shopnewst'), CategoryModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
