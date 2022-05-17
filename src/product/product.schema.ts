import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  image: string[];
  @Prop({ unique: true, required: true })
  title: string; //название
  @Prop({ required: true })
  prise: number; //цена
  @Prop({ required: true })
  category: string; //категория
  @Prop({ type: Object, required: true })
  information: object; //информация о товаре
}

export const ProductSchema = SchemaFactory.createForClass(Product);
