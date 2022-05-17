import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';

export class ProductDto {
  image: string[]; //картинки
  title: string; //название
  prise: number; //цена
  category: string; //категория
  information: object; //информация
}
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  //создать товар
  async create(dto: ProductDto) {
    const candidate = await this.productModel.findOne({ title: dto.title });
    if (candidate) return { message: 'Данное название занято', status: false };
    const product = new this.productModel(dto);
    await product.save();
    return { status: true, data: product };
  }

  //получение товара по id
  async findOne(id: string) {
    const product = await this.productModel.findById(id);
    return product;
  }

  //получение товара по категорий
  async findCategory(category: string) {
    const product = await this.productModel.find({ category });
    return product;
  }

  //получение всех товаров
  async findAll() {
    const products: any[] = await this.productModel.find();
    return products;
  }

  //удаление товара
  async destroy(id: string) {
    return await this.productModel.findByIdAndDelete(id);
  }
}
