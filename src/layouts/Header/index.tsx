import { Twitter } from "@/images";
import { Link } from "react-router-dom";

import { StyledHeader } from "./styles";

function HeaderComponent(): React.ReactElement {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={Twitter} alt="Twitter Logo" />
        <h1>Minimal Twitter</h1>
      </Link>
    </StyledHeader>
  );
}

export default HeaderComponent;
