import { AxiosResponse } from "axios";
import Axios from "./config";
import { PostType } from "../types";


export async function getPostsByPage(pageNumbere: number): Promise<PostType[]> {
    try {
        const response: AxiosResponse<PostType[]> = await Axios.get(
            `posts?_start=${(pageNumbere - 1) * 10}&_limit=10`
        );

        return response.data;
    }
    catch (error) {
        console.log(error);

        return [];
    }
}

export async function getNumberOfPosts(): Promise<number> {
    try {
        const response: AxiosResponse<PostType[]> = await Axios.get("posts");
        
        return response.data.length;
    }
    catch (error) {
        console.log(error);

        return 0;
    }
}
