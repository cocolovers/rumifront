import type {IUser} from "../interfaces/IUser";

export const auth = (user: IUser) => ({
  name: user.name,
  id: user.id,
})
