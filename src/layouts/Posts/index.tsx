import { useState, memo, useCallback, useEffect } from "react";

import { Post, SendPost, Pagination } from "../../components";
import { PostType } from "../../utilities/types";
import { StyledPosts, StyledContainer } from "./styles";
import { fetchPosts, getPagesOfPosts } from "../../utilities/backend";


let MAX_PAGES: number;

(async () => {
    MAX_PAGES = await getPagesOfPosts();
})();


function PostsComponent(): React.ReactElement {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        handleGetPostsByPage(1);
    }, []);

    const handleGetPostsByPage = useCallback(async (pageNumber: number) => {
        const fetchedPosts = await fetchPosts(pageNumber);
        setPosts(fetchedPosts);
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
            <Pagination maxPages={MAX_PAGES} onChangeActivePage={handleGetPostsByPage} />
        </StyledContainer>
    )
}


export default memo(PostsComponent);
