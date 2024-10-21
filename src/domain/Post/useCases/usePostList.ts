import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);

  const fetchInitialData = async () => {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(list);
      //TODO validar se tem mais pagina
      setPage(2);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPage = async () => {
    // if (loading) return;

    try {
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (er) {
      setError(true);
    } finally {
      setError(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    postList,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
