import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class VehicleBrand {
  @ObjectIdColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  model: string;
}
