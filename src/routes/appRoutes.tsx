import { ROUTES } from '../constants/routes';
import Main from '../pages/main';
import Home from '../pages/home/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//라우팅 관련 함수
const AppRoutes = () => {
  const routes = [
    {
      path: ROUTES.main,
      element: <Main />,
    },
    {
      path: ROUTES.home,
      element: <Home />,
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
