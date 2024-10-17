import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODo Simular delay

  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mw.X-eww7PD6xmLhsc3D52w006r4uDXHTL0SqI0Jlyf0vwx9EtR1nhSRqQXOp5z',
    },
  });

  let data = await response.json();
  console.table('Fetch Data: ', data);

  //****** */
  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};
