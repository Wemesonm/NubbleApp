import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mw.X-eww7PD6xmLhsc3D52w006r4uDXHTL0SqI0Jlyf0vwx9EtR1nhSRqQXOp5z',
    },
  });

  let data = await response.json();
  return data;
}

export const postApi = {
  getList,
};
