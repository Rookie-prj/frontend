import GlobalLayout from './style/reset';
import AppRoutes from './routes/appRoutes';
import { MSWProvider } from './components/common/MSWProvider/MSWProvider';
import { QueryProvider } from './components/common/queryProvider';

const App = () => {
  return (
    <>
      <GlobalLayout />
      {/* <QueryProvider>
        <MSWProvider>
          <AppRoutes />
        </MSWProvider>
      </QueryProvider> */}
      <QueryProvider>
        <AppRoutes />
      </QueryProvider>
    </>
  );
};

export default App;
