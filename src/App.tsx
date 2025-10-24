import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalLayout from './style/reset';
import AppRoutes from './routes/appRoutes';
import { MSWProvider } from './components/common/MSWProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: 1,
      gcTime: 20000,
    },
  },
});

const App = () => {
  return (
    <>
      <GlobalLayout />
      {/* <QueryClientProvider client={queryClient}>
        <MSWProvider>
          <AppRoutes />
        </MSWProvider>
      </QueryClientProvider> */}
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </>
  );
};

export default App;
