import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ unique: true })
  value: string;
  @Prop({ type: Array })
  information: string[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
