import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Profile } from "./Profile";
import { Todo } from "./Todo";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  //cascade : true, means operations such as saving, updating, or removing the owning entity will also be applied to the related Profile entity.
  //eager : true means it will allows the entity to display all data along with the relation data
  // @OneToOne(() => Profile, (profile) => profile.user, {
  //   cascade: true,
  //   eager: true,
  // })
  // @JoinColumn()
  // profile: Profile;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
