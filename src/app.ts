import "reflect-metadata";
import express, { Request, Response } from "express";
import dataSource from "./data-source";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";
import { Todo } from "./entity/Todo";
import { Student } from "./entity/Student";
import { Course } from "./entity/Course";

const PORT = 3000;
const app = express();

dataSource
  .initialize() //dataSource.initialize() returns a promise
  .then(() => {
    console.log("Successfully connected with the database!");
  })
  .catch((err) => {
    console.log("DataSource connection failed", err);
  });

//----------------------------------------------------------------------------------------
//creating, finding, deleting, updating:

// app.get("/", async (req: Request, res: Response) => {
//   let userRepo = dataSource.getRepository(User);

//   const user1 = new User();
//   user1.firstName = "Peter";
//   user1.lastName = "Parker";
//   user1.isActive = true;

//   const user2 = new User();
//   user2.firstName = "Gwen";
//   user2.lastName = "Stacy";
//   user2.isActive = true;

//   const user3 = new User();
//   user3.firstName = "Mary jane";
//   user3.lastName = "Watson";
//   user3.isActive = true;

//   // res.json(await userRepo.save([user1, user2, user3]));

//   //To find
//   // res.json(
//   //   await userRepo.find({
//   //     select: ["firstName", "id"],
//   //   })
//   // );

//   //order
//   // res.json(
//   //   await userRepo.find({
//   //     order: {
//   //       id: "DESC",
//   //     },
//   //   })
//   // );

//   //delete
//   // res.json(await userRepo.delete(4));

//   //update
//   // res.json(await userRepo.update(2, { firstName: "Michelle" }));

// });

//----------------------------------------------------------------------------------------
//adding one to one relation

// app.get("/", async (req: Request, res: Response) => {
//   let profileRepo = dataSource.getRepository(Profile);
//   let userRepo = dataSource.getRepository(User);
//   //--------------------------------------
//   //method 1
//   let profile = new Profile();
//   profile.gender = "male";
//   profile.skill = "Magic";
//   let saveProfile = await profileRepo.save(profile);

//   let user = new User();
//   user.firstName = "Stephen";
//   user.lastName = "Strange";
//   user.isActive = true;
//   user.profile = saveProfile;

//   //method 2
//   //This method only works when the cascade is given as true, in the Profile in the User.
//   // let profile = new Profile();
//   // profile.gender = "female";
//   // profile.skill = "Stage actor";

//   // let user = new User();
//   // user.firstName = "Mary Jane";
//   // user.lastName = "Watson";
//   // user.isActive = true;
//   // user.profile = profile;

//   //--------------------------------------

//   //finding all user (left to right)

//   //method 1:
//   //This will only result the user table without relation.
//   //But this will also works only if we have declared eager as true in User entity
//   // let allUser = await userRepo.find();
//   // res.json(allUser);

//   //method 2:
//   //This relation name must be same as the declared name in User.ts (profile:Profile). By doing this we can get User table along with the relation
//   // let allUser = await userRepo.find({
//   //   relations: ["profile"],
//   // });
//   // res.json(allUser);

//   //finding all profile (right to left)

//   let allProfile = await profileRepo.find({
//     relations: ["user"],
//   });

//   res.json(allProfile);
//   //--------------------------------------

//   // let saveUser = await userRepo.save(user);
//   // res.json(saveUser);
// });

//----------------------------------------------------------------------------------------

//one to many

// app.get("/", async (req: Request, res: Response) => {
//   let userRepo = dataSource.getRepository(User);

//   // let todo1 = new Todo();
//   // todo1.title = "TypeORM";
//   // todo1.description = "Learn TypeORM";

//   // let todo2 = new Todo();
//   // todo2.title = "PostgreSQL";
//   // todo2.description = "Learn PostgreSQL";

//   // let todo3 = new Todo();
//   // todo3.title = "ExpressJS";
//   // todo3.description = "Learn ExpressJS";

//   // let user = new User();
//   // user.firstName = "Peter";
//   // user.lastName = "Parker";
//   // user.isActive = true;
//   // user.todos = [todo1, todo2, todo3];

//   // let savedUser = await userRepo.save(user);

//   let allUsers = await userRepo.find({
//     relations: ["todos"],
//   });

//   res.json(allUsers);
// });

//Many to many

app.get("/", async (req: Request, res: Response) => {
  let studentRepo = dataSource.getRepository(Student);

  // const course1 = new Course();
  // course1.code = "CS-001";
  // course1.title = "Computer Programming";

  // const course2 = new Course();
  // course2.code = "CS-002";
  // course2.title = "Web Programming";

  // const student = new Student();
  // student.studName = "Punith";
  // student.age = 24;
  // student.rollNo = "R-27";
  // student.courses = [course1, course2];

  // const savedStudent = await studentRepo.save(student);

  const allStudents = await studentRepo.find();

  res.json(allStudents);
});

app.listen(PORT, () => {
  console.log(`Server is listening on the port ${PORT}`);
});
