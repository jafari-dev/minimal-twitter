export interface PostType {
  id: string;
  text: string;
  date: string;
  likes: number;
  imageAttachment?: string;
  ownerAvatar: string;
  ownerId: string;
  ownerFullname: string;
}

export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  joinDate: string;
  posts: number;
  avatar: string;
}

export enum ResponseState {
  SUCCESS = "Successfully",
  FAIL = "Fail",
  BAD = "Bad",
}
