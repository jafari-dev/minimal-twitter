import { DefaultAvatar } from "@/images";
import { addPost } from "_/backend";
import { PostType, ResponseState } from "_/types";
import { useRef, useCallback } from "react";
import { Button, FormControl } from "react-bootstrap";
import { toast } from "react-toastify";
import { v4 as uuid4 } from "uuid";

import { StyledSendTweet } from "./styles";

interface Props {
  onSendNewPost: (newPost: PostType) => void;
}

function SendPostComponent({ onSendNewPost }: Props): React.ReactElement {
  const urlInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const sendTweet = useCallback(async () => {
    const text = textInputRef.current?.value?.trim() || "";
    const attachment = urlInputRef.current?.value?.trim() || "";

    if (
      text !== "" &&
      localStorage.getItem("__USERNAME") &&
      localStorage.getItem("__FULLNAME")
    ) {
      const newPost: PostType = {
        text: text,
        ownerAvatar: DefaultAvatar,
        date: new Date().toDateString(),
        id: uuid4(),
        likes: 0,
        ownerId: localStorage.getItem("__USERNAME") ?? "",
        ownerFullname: localStorage.getItem("__FULLNAME") ?? "",
        imageAttachment: attachment,
      };

      try {
        const response = await addPost(newPost);
        switch (response) {
          case ResponseState.SUCCESS:
            onSendNewPost(newPost);
            toast.success("Your post sent successfully!");
            break;
          case ResponseState.FAIL:
            toast.error("Your post didn't send!");
            break;
          default:
            toast.error("Some errors occurs!");
        }
        onSendNewPost(newPost);
      } catch (error) {
        toast.error("Some errors occurs!");
      }

      (textInputRef.current as HTMLTextAreaElement).value = "";
      (urlInputRef.current as HTMLInputElement).value = "";
    }
  }, [
    onSendNewPost,
    localStorage.getItem("__USERNAME"),
    localStorage.getItem("__FULLNAME"),
  ]);

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
