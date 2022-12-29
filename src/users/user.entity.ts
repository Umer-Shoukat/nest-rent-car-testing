import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  userInserted() {
    console.log(`A new user instered witn id: ${this.id}`);
  }

  @AfterUpdate()
  userUpdated() {
    console.log(`A user updated with id: ${this.id}`);
  }

  @AfterRemove()
  userDeleted() {
    console.log(`A user deleted with id: ${this.id}`);
  }
}
