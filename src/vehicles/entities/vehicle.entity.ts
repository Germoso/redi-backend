import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { FuelType } from '../fuel-type/entities/fuel-type.entity';

@Entity()
export class Vehicle {
  @ObjectIdColumn()
  id: string;
  @Column()
  name: string;
  @Column(() => FuelType)
  combustible: FuelType;
}
