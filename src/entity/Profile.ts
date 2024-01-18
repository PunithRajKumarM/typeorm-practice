import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Profile" }) // name of the table starts with capital "P"
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false }) // defining that this column shouldn't be null
  gender: string;

  @Column({ nullable: true }) // defining that this column can be null
  skill: string;
}
