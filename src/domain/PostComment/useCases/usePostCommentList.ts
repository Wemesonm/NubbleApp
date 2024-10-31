import { postCommentService } from '@domain';
import {usePaginatedList} from '@infra';



export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }
  return usePaginatedList(getList);
}
