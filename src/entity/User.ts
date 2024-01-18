import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Profile } from "./Profile";

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

  @OneToOne(() => Profile, { cascade: true }) //cascade : true, means operations such as saving, updating, or removing the owning entity will also be applied to the related Profile entity.
  @JoinColumn()
  profile: Profile;
}
