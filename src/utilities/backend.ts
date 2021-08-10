import { PostType } from "./types";


export async function fetchPosts(page: number) {
    try {
        const response = await fetch(`http://localhost:4000/posts?_start=${(page - 1) * 10}&_limit=10`);
        const data: PostType[] = await response.json();
        return data;
    }
    catch(error) {
        console.log(error);
        return [];
    }            
}

export async function getPagesOfPosts() {
    try {
        const response = await fetch("http://localhost:4000/posts");
        const data: PostType[] = await response.json();
        return data.length / 10;
    }
    catch(error) {
        console.log(error);
        return 0;
    } 
}
