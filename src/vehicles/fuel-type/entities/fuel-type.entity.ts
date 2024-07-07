import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class FuelType {
  @ObjectIdColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
}
