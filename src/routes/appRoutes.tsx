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
import { Signup } from '../pages/signup/signup';
import RookieDetail from '../pages/rookieDetail';
import Intro from '../pages/intro/intro';
import Onboarding from '../pages/onboarding/onboarding';
import Login from '../pages/login/login';
import MyProfile from '../pages/myprofile';
import MyProfileSetting from '../pages/myprofile/setting';
import QueryErrorBoundary from '../error/QueryErrorBoundary';
import Chatroom from '../pages/chat/chatRoom/chatroom';
import Notification from '../pages/notification';
import Search from '../pages/search/search';

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
          index: true,
          element: <Intro />,
        },
        {
          path: ROUTES.home,
          element: <Home />,
        },
        {
          path: ROUTES.explore,
          element: (
            <QueryErrorBoundary>
              <ExplorePage />
            </QueryErrorBoundary>
          ),
        },
        {
          path: ROUTES.chat,
          element: (
            <QueryErrorBoundary>
              <Chat />
            </QueryErrorBoundary>
          ),
        },
        {
          path: ROUTES.library,
          element: (
            <QueryErrorBoundary>
              <Library />
            </QueryErrorBoundary>
          ),
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
      path: ROUTES.onboarding,
      element: <Onboarding />,
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
        <QueryErrorBoundary>
          <Layout hideNavigation={true}>
            <PostDetail />
          </Layout>
        </QueryErrorBoundary>
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
        <QueryErrorBoundary>
          <Layout hideNavigation={true}>
            <RookieDetail />
          </Layout>
        </QueryErrorBoundary>
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
    {
      path: ROUTES.signup,
      element: (
        <Layout hideNavigation={true}>
          <Signup />
        </Layout>
      ),
    },
    {
      path: ROUTES.login,
      element: (
        <Layout hideNavigation={true}>
          <Login />
        </Layout>
      ),
    },
    {
      path: ROUTES.search,
      element: (
        <QueryErrorBoundary>
          <Layout>
            <Search />
          </Layout>
        </QueryErrorBoundary>
      ),
    },
    {
      path: ROUTES.myprofile,
      element: (
        <QueryErrorBoundary>
          <Layout hideNavigation={true}>
            <MyProfile />
          </Layout>
        </QueryErrorBoundary>
      ),
    },
    {
      path: ROUTES.myprofileSetting,
      element: (
        <QueryErrorBoundary>
          <Layout hideNavigation={true}>
            <MyProfileSetting />
          </Layout>
        </QueryErrorBoundary>
      ),
    },
    {
      path: ROUTES.chatRoom,
      element: (
        <QueryErrorBoundary>
          <Layout hideNavigation={true}>
            <Chatroom />
          </Layout>
        </QueryErrorBoundary>
      ),
    },
    {
      path: ROUTES.notification,
      element: (
        <QueryErrorBoundary>
          <Layout hideNavigation={true}>
            <Notification />
          </Layout>
        </QueryErrorBoundary>
      ),
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
