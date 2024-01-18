import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "typeorm-db",
  synchronize: true,
  logging: true,
  entities: [User, Profile],
});

export default dataSource;

// import { User } from "./entity/User"

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "12345",
//     database: "typeorm-db",
//     synchronize: true,
//     logging: false,
//     entities: [User],
//     migrations: [],
//     subscribers: [],
// })
