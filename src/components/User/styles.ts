
import styled from "@emotion/styled/macro";
import { Card, Image } from "react-bootstrap";


export const StyledUser = styled(Card)`
    margin-block: 32px;
    border-radius: 8px;
`;

export const StyledHeader = styled(Card.Header)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledHeaderDetails = styled.div`
    width: 100%;
    margin-inline: auto;

    > hr {
        margin-block: 8px;
    }
`;

export const StyledFlexRow = styled(Card.Title)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    > div {
        font-size: 14px;
    }
`;

export const StyledAvatar = styled(Image)`
    margin-right: 8px;
    width: 60px;
    height: 60px;
    border: 2px solid black;
`;
