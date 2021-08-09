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