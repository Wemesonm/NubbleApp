export interface Post {
  id: string;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}

export interface PostAPI {
  id: number; // 1,
  text: string; //"Bom dia!",
  user_id: number; //1,
  image_url: string; //"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg",
  is_fixed: boolean; // false;
  is_activated: boolean; // true;
  created_at: string; // '2024-10-16T22:57:25.905-04:00';
  updated_at: string; //'2024-10-16T22:57:25.910-04:00';
  user: {
    id: number; //1,
    first_name: string; // "Maria",
    last_name: string; //"Julia",
    username: string; //"mariajulia",
    email: string; // "mariajulia@coffstack.com",
    profile_url: string; //'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
    is_online: boolean; // false;
    full_name: string; //"Maria Julia"
  };
  status: string; //"published",
  meta: {
    like_count: string; //"9",
    favorite_count: string; //"3",
    comments_count: string; //"7"
  };
}
