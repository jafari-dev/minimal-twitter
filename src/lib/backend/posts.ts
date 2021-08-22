import { AxiosResponse } from "axios";

import { updateUserPosts } from ".";
import { PostType, ResponseState } from "../types";
import Axios from "./config";

export async function getPostsByPage(pageNumbere: number): Promise<PostType[]> {
  try {
    const response: AxiosResponse<PostType[]> = await Axios.get(
      `posts?_start=${(pageNumbere - 1) * 10}&_limit=10`
    );

    return response.data;
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function getNumberOfPosts(): Promise<number> {
  try {
    const response: AxiosResponse<PostType[]> = await Axios.get("posts");

    return response.data.length;
  } catch (error) {
    console.log(error);

    return 0;
  }
}

export async function addPost(postData: PostType): Promise<string> {
  try {
    await Axios.post("posts", postData);
    const updateResponse = await updateUserPosts(postData.ownerId, 1);
    if (updateResponse === ResponseState.SUCCESS) {
      return ResponseState.SUCCESS;
    } else {
      return ResponseState.FAIL;
    }
  } catch (error) {
    return ResponseState.FAIL;
  }
}
