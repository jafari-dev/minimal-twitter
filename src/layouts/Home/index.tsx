import { useCallback } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { StyledHome } from "./styles";


interface Props {
    isLoggedIn?: boolean;
    onLogout: (state: false) => void;
}

function HomeComponent({isLoggedIn = false, onLogout}: Props): React.ReactElement {
    const logout = useCallback(() => {
        localStorage.clear();
        onLogout(false);
    }, [onLogout]);

    
    return (
        <StyledHome>
            {isLoggedIn ? 
            <>
                <Link to="/posts">
                    <Button size="lg" variant="warning">SEE ALL POSTS</Button>
                </Link>
                <Link to="/users">
                    <Button size="lg" variant="success">SEE ALL USERS</Button>
                </Link>
                <Link to="/" onClick={logout}>
                    <Button size="lg" variant="danger">LOGOUT</Button>
                </Link>
            </> :
            <>
                <Link to="/register">
                    <Button size="lg" variant="info">REGISTER</Button>
                </Link>
                <Link to="/login">
                    <Button size="lg" variant="dark">LOGIN</Button>
                </Link>
            </>
            }
        </StyledHome>
    );
}

export default HomeComponent;
