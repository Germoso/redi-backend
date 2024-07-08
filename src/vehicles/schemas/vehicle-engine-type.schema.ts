import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleEngineDocument = HydratedDocument<VehicleEngineType>;

@Schema()
export class VehicleEngineType {
  @Prop()
  name: string;
  @Prop()
  model: string;
  @Prop()
  description: string;
}

export const VehicleEngineTypeSchema =
  SchemaFactory.createForClass(VehicleEngineType);
