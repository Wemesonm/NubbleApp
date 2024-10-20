import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  const postPageAPI = await postApi.getList();

  // throw new Error('Erro de teste');
  // return [];
  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
