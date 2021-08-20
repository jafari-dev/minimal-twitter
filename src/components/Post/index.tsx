import { memo } from "react";
import { Card, Button } from "react-bootstrap";

import { PostType } from "_/types";
import { Heart } from "@/images";
import {
    StyledAvatar,
    StyledBody,
    StyledPost,
    StyledFullname,
    StyledId,
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
    return (
        <StyledPost>
            <StyledHeader>
                <StyledAvatar roundedCircle src={ownerAvatar} />
                <StyledHeaderDetails>
                    <StyledNameAndId>
                        <StyledFullname>{ownerFullname}</StyledFullname>
                        <StyledId>@{ownerId}</StyledId>
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
