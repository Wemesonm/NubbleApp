import {api, PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 2000)); //delay
  const response = await api.get<PageAPI<PostAPI>>('user/post');
  return response.data;

  // let response = await fetch('http:127.0.0.1:3333/user/post', {
  //   method: 'GET',
  //   headers: {
  //     Authorization:
  //       'Bearer Mw.X-eww7PD6xmLhsc3D52w006r4uDXHTL0SqI0Jlyf0vwx9EtR1nhSRqQXOp5z',
  //   },
  // });

  // let data = await response.json();
  // return data;
}

export const postApi = {
  getList,
};
