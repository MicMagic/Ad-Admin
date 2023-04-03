// 声明式路由
import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import HomePage from '../views/HomePage';

const routers: RouteObject[] = [
  {
    path: '/homepage',
    element: <HomePage />,
    children: [
      {
        path: 'dashboard',
        element: ''
      },
      {
        path: 'selection',
        element: ''
      },
      {
        path: 'adPlatform',
        element: ''
      },
      {
        path: 'buryPoint',
        element: ''
      },
      {
        path: 'package',
        element: ''
      },
      {
        path: 'userPortrait',
        element: ''
      },
      {
        path: 'alternative',
        element: ''
      },
      {
        path: 'autoTest',
        element: ''
      }
    ]
  },
  // 重定向路由
  {
    path: '/',
    element: <Navigate to="/homepage" />
  },
];
export default routers;
