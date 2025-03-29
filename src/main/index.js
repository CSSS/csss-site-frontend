import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import {
  Home,
  Profile,
  CommonRooms,
  NotFound,
  Affiliates,
  Documents,
  Committees
} from './pages';

import {
  AboutElections,
  PastElections,
  ElectionInfo,
  Register
} from './pages/elections';

const router = createHashRouter([
  { path: '/', element: <Home /> },
  { path: '/common_rooms', element: <CommonRooms /> },
  { path: '/profile', element: <Profile /> },
  { path: '/affiliates', element: <Affiliates /> },
  { path: '/committees', element: <Committees /> },
  { path: '/documents', element: <Documents /> },
  { path: '*', element: <NotFound /> },

  { path: '/elections/about', element: <AboutElections /> },
  { path: '/elections', element: <PastElections /> },
  { path: '/elections/:slug', element: <ElectionInfo /> },
  { path: '/elections/:slug/register', element: <Register /> }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
