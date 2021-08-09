import { useState, memo, useCallback, useEffect } from "react";

import { Post, SendPost } from "../../components";
import { PostType } from "../../utilities/types";
import { StyledPosts, StyledContainer } from "./styles";


function PostsComponent(): React.ReactElement {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        (async function() {
            try {
                const response = await fetch("http://localhost:4000/posts");
                const posts = await response.json();
                setPosts(posts);
            } catch(error) {
                console.log(error);
            }
        })();
    }, []);

    const handleSendNewPost = useCallback((newPost: PostType) => {
        setPosts([newPost, ...posts])
    }, [posts]);

    return (
        <StyledContainer>
            <SendPost onSendNewPost={handleSendNewPost} />
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