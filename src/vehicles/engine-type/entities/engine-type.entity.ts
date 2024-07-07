import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class EngineType {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  name: string;
  @Column()
  model: string;
  @Column()
  description: string;
  // TODO: Implement file upload
  // @Column()
  // fileId: string;
  // @Column()
  // file: Buffer;
}
