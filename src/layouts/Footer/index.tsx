import { StyledFooter } from "./styles";


function FooterComponent(): React.ReactElement {
    return (
        <StyledFooter>
            <p>You can access to codes of this open source project from&nbsp;</p>
            <a
                href="https://github.com/a99jafari/minimal-twitter"
                target="_blank"
                rel="noreferrer"
            >
                here.
            </a>
        </StyledFooter>
    )
}

export default FooterComponent;
