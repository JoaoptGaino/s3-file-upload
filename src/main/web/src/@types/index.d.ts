type Nullable<T> = T | null;

interface UserProfile {
  userProfileId: string;
  username: string;
  userProfileImageLink: Nullable<string>;
}

interface DropzoneProps {
  userProfileId: string;
}
