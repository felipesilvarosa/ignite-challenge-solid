import { v4 as uuidV4 } from "uuid";

class User {
  name?: string;
  email?: string;
  id?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
