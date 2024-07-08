import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema()
export class Vehicle {
  id: string;
  name: string;
  // combustible: FuelType;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
