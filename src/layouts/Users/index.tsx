import { useState, memo, useCallback, useEffect } from "react";

import { User, Pagination } from "../../components";
import { UserType } from "../../utilities/types";
import { StyledUsers, StyledContainer } from "./styles";
import { getUsersByPage, getNumberOfUsers } from "../../utilities/backend";


function PostsComponent(): React.ReactElement {
    const [users, setUsers] = useState<UserType[]>([]);
    const [numberOfUsersPagination, setNumberOfUsersPagination] = useState(0);

    const handleGetUsersByPage = useCallback(async (pageNumber: number) => {
        const fetchedUsers = await getUsersByPage(pageNumber);
        setUsers(fetchedUsers);
    }, []);

    useEffect(() => {
        (async function() {
            const numberOfUsers = await getNumberOfUsers();
            setNumberOfUsersPagination(numberOfUsers / 20);
            handleGetUsersByPage(1);
        })();
    }, []);


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
            <Pagination maxPages={numberOfUsersPagination} onChangeActivePage={handleGetUsersByPage} />
        </StyledContainer>
    )
}

export default memo(PostsComponent);
