export interface User {
  id: number;
  name: string;
  age: number;
  gender: "female" | "male";
  city: string;
  image: any;
  isLiked: boolean;
  isOnline?: boolean;
}
