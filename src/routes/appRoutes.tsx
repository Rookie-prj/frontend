import { ROUTES } from '../constants/routes';
import Main from '../pages/main';
import Home from '../pages/home/home';
import ExplorePage from '../pages/explore';
import Chat from '../pages/chat/chat';
import Library from '../pages/library/library';
import Hot from '../pages/hot/hot';
import { CreateProject } from '../pages/createProject/createProject';
import { CreateRookie } from '../pages/createProject/createRookie';
import PostDetail from '../pages/postDetail/postDetail';
import Layout from '../components/layout/layout';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Toolkit from '../pages/toolkit/toolkit';
import ToolkitDetail from '../components/toolkit/toolkitDetail';

import RookieDetail from '../pages/rookieDetail';
import Intro from '../pages/intro/intro';

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
          path: ROUTES.home,
          element: <Home />,
        },
        {
          path: ROUTES.explore,
          element: <ExplorePage />,
        },
        {
          path: ROUTES.chat,
          element: <Chat />,
        },
        {
          path: ROUTES.library,
          element: <Library />,
        },
        {
          path: ROUTES.hot,
          element: <Hot />,
        },
      ],
    },
    {
      path: ROUTES.intro,
      element: <Intro />,
    },
    {
      path: ROUTES.createProject,
      element: (
        <Layout hideNavigation={true}>
          <CreateProject />
        </Layout>
      ),
    },
    {
      path: ROUTES.createRookie,
      element: (
        <Layout hideNavigation={true}>
          <CreateRookie />
        </Layout>
      ),
    },

    {
      path: ROUTES.postDetail,
      element: (
        <Layout hideNavigation={true}>
          <PostDetail />
        </Layout>
      ),
    },
    {
      path: ROUTES.toolkit,
      element: (
        <Layout hideNavigation={true}>
          <Toolkit />
        </Layout>
      ),
    },
    {
      path: ROUTES.rookieDetail,
      element: (
        <Layout hideNavigation={true}>
          <RookieDetail />
        </Layout>
      ),
    },
    {
      path: ROUTES.toolkitDetail,
      element: (
        <Layout hideNavigation={true}>
          <ToolkitDetail />
        </Layout>
      ),
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
