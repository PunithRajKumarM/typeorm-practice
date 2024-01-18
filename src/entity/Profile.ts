import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Profile" }) //name of the table starts with capital "P"
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;

  @Column()
  skill: string;
}
