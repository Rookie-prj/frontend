import { ReactNode } from 'react';
import { Loading } from '../loading';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';

interface InfiniteScrollListProps {
  children: ReactNode;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  enabled?: boolean;
  padding?: string;
}

function InfiniteScrollList({
  children,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  enabled = true,
  padding,
}: InfiniteScrollListProps) {
  const { observerRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    enabled,
  });

  return (
    <div style={padding ? { padding } : undefined}>
      {children}
      <div ref={observerRef} style={{ height: '20px' }} />
      {isFetchingNextPage && <Loading />}
    </div>
  );
}

export default InfiniteScrollList;
