import styled from "@emotion/styled/macro";

import { StyledPost } from "../../components/Post/styles";

export const StyledPosts = styled.section`
  background-color: #bad1ff;
  padding: 16px;
  border-radius: 8px;

  ${StyledPost} {
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
