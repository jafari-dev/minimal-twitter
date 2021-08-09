import { memo } from "react";
import { Card, Button } from "react-bootstrap";

import { PostType } from "../../utilities/types";
import { Heart } from "../../images";
import {
    StyledAvatar,
    StyledBody,
    StyledPost,
    StyledFullname,
    StyledUsername,
    StyledDateAndTime,
    StyledNameAndId,
    StyledHeaderDetails,
    StyledHeader,
    StyledFooter
} from "./styles";


function PostComponent({
    id,
    text,
    date,
    likes,
    imageAttachment,
    ownerAvatar,
    ownerFullname,
    ownerId,
}: PostType): React.ReactElement {
    console.log(text);
    return (
        <StyledPost>
            <StyledHeader>
                <StyledAvatar roundedCircle src={ownerAvatar} />
                <StyledHeaderDetails>
                    <StyledNameAndId>
                        <StyledFullname>{ownerFullname}</StyledFullname>
                        <StyledUsername>@{ownerId}</StyledUsername>
                    </StyledNameAndId>
                    <hr />
                    <StyledDateAndTime>
                       {date}
                    </StyledDateAndTime>
                </StyledHeaderDetails>
            </StyledHeader>
            <StyledBody>
                <Card.Text>{text}</Card.Text>
                {imageAttachment && <Card.Img src={imageAttachment} /> }
                <StyledFooter>
                    <div>
                        <img src={Heart} alt="Likes" />
                        <span>{likes}</span>
                    </div>
                    <Button variant="primary" size="sm">Re-tweet</Button>
                </StyledFooter>
            </StyledBody>
        </StyledPost>
    );
}

export default memo(PostComponent);
