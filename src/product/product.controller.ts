import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { category } from 'src/category/category.service';

import { ProductService, ProductDto } from './product.service';

@Controller('api/product')
export class ProductController {
  constructor(private service: ProductService) {}

  //получение все товаров
  @Get('/')
  findAll() {
    return this.service.findAll();
  }

  //получение товара по id
  @Get('/id=:id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  //получение товаров определенной категорий
  @Get('/category=:category')
  findCategory(@Param('category') category: string) {
    return this.service.findCategory(category);
  }

  //создание товара
  @Post('/')
  create(@Body() dto: ProductDto) {
    return this.service.create(dto);
  }

  //удалить товар
  @Delete('/:id')
  destroy(@Param('id') id: string) {
    return this.service.destroy(id);
  }
}
