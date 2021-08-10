import { StyledHeader } from "./styles";
import { Twitter } from "../../images";


function HeaderComponent(): React.ReactElement {
    return (
        <StyledHeader>
            <img src={Twitter} alt="Twitter Logo" />
            <h1>Minimal Twitter</h1>
        </StyledHeader>
    )
}

export default HeaderComponent;
