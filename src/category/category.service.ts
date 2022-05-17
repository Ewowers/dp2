import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.schema';
export interface category {
  value: string;
  information: object;
}
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}
  async findAll() {
    // Получение всех категорий
    const categoryes = await this.categoryModel.find();

    return categoryes;
  }
  async findId(id: string) {
    // Получение категорий по id
    const category = await this.categoryModel.findById(id);
    return category;
  }
  async create(dto: category) {
    // Создать категорию
    const candidate = await this.categoryModel.findOne({ value: dto.value });
    if (candidate) {
      return { message: 'Данная категория существует', status: false };
    }
    const category = new this.categoryModel(dto);
    await category.save();
    return category;
  }
  async update(dto: category, id: string) {
    // Обновить категорию
    const category = await this.categoryModel.findByIdAndUpdate(id, dto);
    return category;
  }
  async destroy(id: string) {
    //удалить категорию
    const category = await this.categoryModel.findByIdAndDelete(id);
    return category;
  }
}
