import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";

@Entity({ name: "Course" })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  code: string;

  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
}
