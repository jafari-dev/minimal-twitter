import { DefaultAvatar } from "@/images";
import { PostType } from "_/types";
import { useRef, useCallback } from "react";
import { Button, FormControl } from "react-bootstrap";

import { StyledSendTweet } from "./styles";

interface Props {
  onSendNewPost: (newPost: PostType) => void;
}

function SendPostComponent({ onSendNewPost }: Props): React.ReactElement {
  const urlInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const sendTweet = useCallback(() => {
    const text = textInputRef.current?.value?.trim() || "";
    const attachment = urlInputRef.current?.value?.trim() || "";

    if (text !== "") {
      const newPost: PostType = {
        text: text,
        ownerAvatar: DefaultAvatar,
        date: new Date().toDateString(),
        id: `${Math.floor(Math.random() * 100000)}`,
        likes: 0,
        ownerId: "al_pacino",
        ownerFullname: "Al Pacino",
        imageAttachment: attachment,
      };

      onSendNewPost(newPost);

      (textInputRef.current as HTMLTextAreaElement).value = "";
      (urlInputRef.current as HTMLInputElement).value = "";
    }
  }, [onSendNewPost]);

  return (
    <StyledSendTweet>
      <FormControl
        ref={textInputRef}
        rows={4}
        as="textarea"
        maxLength={280}
        placeholder="What's happening?"
      />
      <FormControl
        ref={urlInputRef}
        placeholder="Enter the url of attachment image"
      />
      <Button variant="success" onClick={sendTweet}>
        Tweet!
      </Button>
    </StyledSendTweet>
  );
}

export default SendPostComponent;
