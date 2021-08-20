
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FourZeroFour } from "../../assets/images";
import { StyledNotFound } from "./styles";


function NotFoundComponent(): React.ReactElement {
    return (
        <StyledNotFound>
            <img src={FourZeroFour} alt="Error 404 logo" />
            <h3>Page not found!</h3>
            <Link to="/">
                <Button size="lg" variant="primary">GO TO HOME</Button>
            </Link>
        </StyledNotFound>
    )
}


export default NotFoundComponent;
