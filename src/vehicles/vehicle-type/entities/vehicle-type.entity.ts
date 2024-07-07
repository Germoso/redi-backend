import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class VehicleType {
  @ObjectIdColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  // TODO: Add file property
  // @Column()
  // file: string;
}
