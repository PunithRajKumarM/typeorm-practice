import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Course } from "./Course";

@Entity({ name: "Student" })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  rollNo: string;

  @Column({ nullable: false })
  studName: string;

  @Column({ nullable: false })
  age: number;

  @ManyToMany(() => Course, (course) => course.students, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  courses: Course[];
}
