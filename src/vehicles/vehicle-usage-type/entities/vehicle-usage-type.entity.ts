import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class VehicleUsageType {
  @ObjectIdColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
}
