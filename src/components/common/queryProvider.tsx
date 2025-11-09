import {
  Mutation,
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import HttpError from '../../api/httpError';
import { refreshAccessToken } from '../../api/token';
import { HTTP_STATUS } from '../../constants/http';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: 1,
      gcTime: 20000,
    },
  },
  //mutationCache: new MutationCache({ onError: handleMutationError }),
});
const retriedMutations = new WeakSet<Mutation<unknown, unknown, unknown>>();
async function handleMutationError(
  error: Error,
  variables: unknown,
  context: unknown,
  mutation: Mutation<unknown, unknown, unknown>,
) {
  const err = error as HttpError;
  if (retriedMutations.has(mutation)) {
    return;
  }
  if (
    err instanceof HttpError &&
    (err.status === HTTP_STATUS.UNAUTHORIZED ||
      err.status === HTTP_STATUS.FORBIDDEN ||
      err.status === HTTP_STATUS.INTERNAL_SERVER_ERROR)
  ) {
    retriedMutations.add(mutation);

    try {
      //await refreshAccessToken();
      await mutation.execute(variables);
    } catch (error) {
      if (typeof window !== 'undefined') {
        console.error('토큰 재발급 실패:', error);
      }
      return;
    }
  }
}

export const QueryProvider = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
