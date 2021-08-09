import styled from "@emotion/styled/macro";
import { Card } from "react-bootstrap";


export const StyledSendTweet = styled(Card)`
    border-radius: 8px;
    margin-block: 16px;
    padding: 16px;
    background-color: #d3ffbd;

    > textarea {
        resize: none;
        margin-bottom: 16px;
    }

    > button {
        display: block;
        align-self: flex-end;
        margin-top: 16px;
    }
`;
