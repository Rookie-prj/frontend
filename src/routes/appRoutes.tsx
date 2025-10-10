import { ROUTES } from '../constants/routes';
import Main from '../pages/main';
import Home from '../pages/home/home';
import Search from '../pages/search/search';
import Chat from '../pages/chat/chat';
import Library from '../pages/library/library';
import Layout from '../components/layout/layout';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

//라우팅 관련 함수
const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: ROUTES.main,
          element: <Main />,
        },
        {
          path: ROUTES.home,
          element: <Home />,
        },
        {
          path: ROUTES.search,
          element: <Search />,
        },
        {
          path: ROUTES.chat,
          element: <Chat />,
        },
        {
          path: ROUTES.library,
          element: <Library />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
