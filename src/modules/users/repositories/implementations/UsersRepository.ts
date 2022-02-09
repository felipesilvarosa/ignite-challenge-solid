import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, { name, email, admin: false });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const userFound = this.users.find((user) => user.user_id === id);

    if (userFound) {
      return userFound;
    }

    throw new Error("User not found");
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
  }

  turnAdmin(receivedUser: User): User {
    const user = receivedUser;
    user.admin = true;
    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
