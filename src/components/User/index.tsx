import { UserType } from "_/types";
import { memo } from "react";

import {
  StyledAvatar,
  StyledUser,
  StyledFlexRow,
  StyledHeaderDetails,
  StyledHeader,
} from "./styles";

function PostComponent({
  id,
  firstName,
  lastName,
  avatar,
  posts,
  joinDate,
}: UserType): React.ReactElement {
  return (
    <StyledUser>
      <StyledHeader>
        <StyledAvatar roundedCircle src={avatar} />
        <StyledHeaderDetails>
          <StyledFlexRow>
            <div>{`${firstName} ${lastName}`}</div>
            <div>@{id}</div>
          </StyledFlexRow>
          <hr />
          <StyledFlexRow>
            <div>{`Joined at ${joinDate}`}</div>
            <div>{`${posts} posts`}</div>
          </StyledFlexRow>
        </StyledHeaderDetails>
      </StyledHeader>
    </StyledUser>
  );
}

export default memo(PostComponent);
