import { useState, memo, useCallback, useEffect } from "react";

import { User, Pagination } from "../../components";
import { UserType } from "../../utilities/types";
import { StyledUsers, StyledContainer } from "./styles";
import { fetchUsers, getPagesOfUsers } from "../../utilities/backend";


let MAX_PAGES: number;

(async () => {
    MAX_PAGES = await getPagesOfUsers();
})();


function PostsComponent(): React.ReactElement {
    const [users, setUsers] = useState<UserType[]>([]);

    const handleGetUsersByPage = useCallback(async (pageNumber: number) => {
        const fetchedUsers = await fetchUsers(pageNumber);
        setUsers(fetchedUsers);
    }, []);

    useEffect(() => {
        handleGetUsersByPage(1);
    }, [handleGetUsersByPage]);


    return (
        <StyledContainer>
            <StyledUsers>
                {users.map((user) => (
                    <User
                        key={user.id}
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        joinDate={user.joinDate}
                        avatar={user.avatar}
                        posts={user.posts}
                    />
                ))}
            </StyledUsers>
            <Pagination maxPages={MAX_PAGES} onChangeActivePage={handleGetUsersByPage} />
        </StyledContainer>
    )
}

export default memo(PostsComponent);
