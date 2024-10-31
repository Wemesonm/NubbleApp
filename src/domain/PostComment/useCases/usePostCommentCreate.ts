import {useState} from 'react';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

interface Options {
  onSucess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}

export function usePostCommentCreate(postId: number, options?: Options) {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setLoad(true);
      setError(null);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSucess) {
        options.onSucess(postComment);
      }
    } catch (err) {
      if (options?.onError) {
        options.onError('Erro ao criar comentario');
      }
      setError(true);
    } finally {
      setLoad(false);
    }
  }
  return {
    createComment,
    load,
    error,
  };
}
