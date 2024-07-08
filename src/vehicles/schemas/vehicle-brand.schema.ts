import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleBrandDocument = HydratedDocument<VehicleBrand>;

@Schema()
export class VehicleBrand {
  @Prop()
  name: string;
  @Prop()
  model: string;
}

export const VehicleBrandSchema = SchemaFactory.createForClass(VehicleBrand);
