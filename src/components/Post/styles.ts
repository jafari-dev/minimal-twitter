import styled from "@emotion/styled/macro";
import { Card, Image } from "react-bootstrap";

export const StyledPost = styled(Card)`
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

  > hr {
    margin-block: 8px;
  }
`;

export const StyledNameAndId = styled(Card.Title)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 4px;
`;

export const StyledDateAndTime = styled(Card.Subtitle)`
  margin-top: 4px;
  color: #888888;
`;

export const StyledAvatar = styled(Image)`
  margin-right: 8px;
  width: 60px;
  height: 60px;
`;

export const StyledFullname = styled.h6`
  color: #000000;
  display: inline-block;
  margin-right: 32px;
`;

export const StyledId = styled(Card.Link)`
  cursor: pointer;
  font-size: 16px;
`;

export const StyledBody = styled(Card.Body)`
  text-align: justify;
  padding-bottom: 0;

  > img {
    max-height: 500px;
  }
`;

export const StyledFooter = styled(Card.Footer)`
  padding: 8px 0;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div {
    img {
      margin-right: 8px;
      width: 30px;
      height: 30px;
    }

    span {
      vertical-align: middle;
    }
  }
`;
