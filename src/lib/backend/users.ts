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

export async function authenticateUser(
  username: string,
  password: string
): Promise<string> {
  try {
    const response: AxiosResponse<UserType[]> = await Axios.get(
      `/users?id=${username}&password=${password}`
    );

    if (response.data.length === 1) {
      const { firstName, lastName } = response.data[0];
      localStorage.setItem("__USERNAME", username);
      localStorage.setItem("__PASSWORD", password);
      localStorage.setItem("__FULLNAME", firstName + " " + lastName);

      return ResponseState.SUCCESS;
    } else if (response.data.length === 0) {
      return ResponseState.BAD;
    } else {
      return ResponseState.FAIL;
    }
  } catch (error) {
    return ResponseState.FAIL;
  }
}
