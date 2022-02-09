import { v4 as uuidV4 } from "uuid";

class User {
  name: string;
  email: string;
  user_id?: string;
  admin?: boolean;

  constructor() {
    if (!this.user_id) {
      this.user_id = uuidV4();
    }
  }
}

export { User };
