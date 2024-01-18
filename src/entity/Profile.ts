import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "Profile" }) // name of the table starts with capital "P"
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false }) // defining that this column shouldn't be null
  gender: string;

  @Column({ nullable: true }) // defining that this column can be null
  skill: string;

  // @OneToOne(() => User, (user) => user.profile)
  // user: User;
}
