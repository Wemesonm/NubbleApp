
export interface PostComment {
  id: number;
  message: string;
  createdAt: string; // '2024-10-22T16:30:32.000-04:00';
  createdAtRelative:string; //'1h, 2sem';
  author: {
    id:number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // 113;
  message: string; // 'Creptio adfectus demitto labore astrum adipisci sufficio convoco caecus.';
  user_id: number; // 7;
  post_id: number; // 1;
  created_at: string; // '2024-10-22T16:30:32.000-04:00';
  updated_at: string; // '2024-10-22T22:54:02.523-04:00';
  user: {
    id: number; // 7;
    first_name: string; // 'Mateus';
    last_name: string; // 'de Souza';
    username: string; // 'mateussouza';
    email: string; // 'msouza@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png';
    is_online: boolean; // false;
    full_name: string; // 'Mateus de Souza';
  };
  meta: any; // {};
}
