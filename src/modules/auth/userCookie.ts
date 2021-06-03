import cookies from "js-cookie";
import { UserType } from "./types/UserType";

export const getUserFromCookie = (): UserType | null => {
  const cookie = cookies.get("auth");
  if (!cookie) {
    return null;
  }
  return JSON.parse(cookie);
};

export const setUserCookie = (user: UserType) => {
  cookies.set("auth", user, {
    expires: 30,
  });
};

export const removeUserCookie = () => cookies.remove("auth");
