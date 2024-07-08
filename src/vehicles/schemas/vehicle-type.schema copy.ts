import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleTypeDocument = HydratedDocument<VehicleType>;

@Schema()
export class VehicleType {
  id: string;
  name: string;
  // combustible: FuelType;
}

export const VehicleTypeSchema = SchemaFactory.createForClass(VehicleType);
