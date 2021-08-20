import { useState, memo, useCallback, useEffect } from "react";

import { Post, SendPost, Pagination } from "../../components";
import { PostType } from "../../utilities/types";
import { StyledPosts, StyledContainer } from "./styles";
import { getPostsByPage, getNumberOfPosts } from "../../utilities/backend/";


function PostsComponent(): React.ReactElement {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [numberOfPostsPagination, setNumberOfPostsPagination] = useState(0);

    const handleGetPostsByPage = useCallback(async (pageNumber: number) => {
        const fetchedPosts = await getPostsByPage(pageNumber);
        setPosts(fetchedPosts);
    }, []);

    useEffect(() => {
        (async function() {
            const numberOfPosts = await getNumberOfPosts();
            setNumberOfPostsPagination(numberOfPosts / 10);
            handleGetPostsByPage(1);
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
            <Pagination maxPages={numberOfPostsPagination} onChangeActivePage={handleGetPostsByPage} />
        </StyledContainer>
    )
}


export default memo(PostsComponent);
