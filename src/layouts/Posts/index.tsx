import { useState, memo } from "react";

import { Post } from "../../components";
import { PostType } from "../../utilities/types";
import { StyledPosts, StyledContainer } from "./styles";
import { DefaultAvatar, Heart } from "../../images"; 

const initialPosts: PostType[] = [
    {
        id: "POST-1",
        date: "2021/05/31",
        likes: 76,
        ownerAvatar: DefaultAvatar,
        ownerFullname: "Robert Deniro",
        ownerId: "deniro",
        text: "This a simple test for Post component"
    },
    {
        id: "POST-2",
        date: "2018/11/17",
        likes: 5783,
        ownerAvatar: DefaultAvatar,
        ownerFullname: "Natalie Portman",
        ownerId: "natalie",
        text: "This a simple test for Post component again!",
        imageAttachment: Heart
    },
]


function PostsComponent(): React.ReactElement {
    const [posts, setPosts] = useState<PostType[]>(initialPosts);

    return (
        <StyledContainer>
            <StyledPosts>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        ownerAvatar={post.ownerAvatar}
                        ownerFullname={post.ownerFullname}
                        ownerId={post.ownerId}
                        text={post.text}
                        date={post.date}
                        likes={post.likes}
                        imageAttachment={post.imageAttachment}
                    />
                ))}
            </StyledPosts>
        </StyledContainer>
    )
}


export default memo(PostsComponent);