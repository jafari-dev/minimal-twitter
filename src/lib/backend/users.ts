import { AxiosResponse } from "axios";

import { UserType, ResponseState } from "../types";
import Axios from "./config";

export async function getUsersByPage(pageNumbere: number): Promise<UserType[]> {
  try {
    const response: AxiosResponse<UserType[]> = await Axios.get(
      `users?_start=${(pageNumbere - 1) * 10}&_limit=10`
    );

    return response.data;
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function getNumberOfUsers(): Promise<number> {
  try {
    const response: AxiosResponse<UserType[]> = await Axios.get("users");

    return response.data.length;
  } catch (error) {
    console.log(error);

    return 0;
  }
}

export async function addUser(
  userInfo: UserType & { password: string }
): Promise<string> {
  try {
    await Axios.post("/users", userInfo);

    return ResponseState.SUCCESS;
  } catch (error) {
    if ((error as Error).message === "Request failed with status code 500") {
      return ResponseState.BAD;
    } else {
      return ResponseState.FAIL;
    }
  }
}
