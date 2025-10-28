import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalLayout from './style/reset';
import AppRoutes from './routes/appRoutes';
import { MSWProvider } from './components/common/MSWProvider/MSWProvider';
import { QueryProvider } from './components/common/queryProvider';

const App = () => {
  return (
    <>
      <GlobalLayout />
      <QueryProvider>
        {/* <MSWProvider> */}
        <AppRoutes />
        {/* </MSWProvider> */}
      </QueryProvider>
      {/* <QueryClientProvider client={queryClient}>
          <AppRoutes />
      </QueryClientProvider> */}
    </>
  );
};

export default App;
