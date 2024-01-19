import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";
import { Todo } from "./entity/Todo";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "typeorm-db",
  synchronize: true,
  logging: true,
  entities: [User, Profile, Todo],
});

export default dataSource;
