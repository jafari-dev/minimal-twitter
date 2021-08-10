import styled from "@emotion/styled/macro";
import { Form, Button, Row } from "react-bootstrap";


export const StyledForm = styled(Form)`
    margin-block: 64px;
    max-width: 600px;
    margin-inline: auto;
    padding: 8px 16px 0;

    background-color: rgba(255, 255, 255, 0.5);
    border: 2px solid black;
    border-radius: 8px;

    input {
        border-color: black;
    }

    > h2 {
        text-align: center;
        color: #007bb4;
        font-weight: 700;
        margin-bottom: 16px;
    }
`;


export const StyledSumbit = styled(Button)`
    width: 100%;
    height: 100%;
`;

export const StyledRow = styled(Row)`
    align-items: flex-end;
    margin-block: 24px;
`