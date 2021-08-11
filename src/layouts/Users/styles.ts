import styled from "@emotion/styled/macro";
import { StyledUser } from "../../components/User/styles";


export const StyledUsers = styled.section`
    background-color: #ada893;
    margin-top: 16px;
    padding: 16px;
    border-radius: 8px;

    ${StyledUser} {
        :first-of-type {
            margin-top: 0;
        }

        :last-of-type {
            margin-bottom: 0;
        }
    }
`;

export const StyledContainer = styled.section`
    text-align: center;
`;
