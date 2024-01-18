import "reflect-metadata";
import express, { Request, Response } from "express";
import dataSource from "./data-source";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";

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

app.get("/", async (req: Request, res: Response) => {
   let profileRepo = dataSource.getRepository(Profile);
  let userRepo = dataSource.getRepository(User);

  let profile = new Profile();
  profile.gender = "male";
  profile.skill = "Photo Editor";

  let saveProfile = await profileRepo.save(profile);

  let user = new User();
  user.firstName = "Peter";
  user.lastName = "Parker";
  user.isActive = true;
  user.profile = saveProfile;

  let saveUser = await userRepo.save(user);

  res.json(saveUser);
});

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

app.listen(PORT, () => {
  console.log(`Server is listening on the port ${PORT}`);
});
