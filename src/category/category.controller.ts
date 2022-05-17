import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { category, CategoryService } from './category.service';

@Controller('api/category')
export class CategoryController {
  constructor(private service: CategoryService) {}
  @Get('/')
  findAll() {
    return this.service.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.service.findId(id);
  }

  @Post('/')
  create(@Body() dto: category) {
    return this.service.create(dto);
  }

  @Put('/:id')
  update(@Body() dto: category, @Param('id') id: string) {
    return this.service.update(dto, id);
  }

  @Delete('/:id')
  destroy(@Param('id') id: string) {
    return this.service.destroy(id);
  }
}
