// 声明式路由
import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import HomePage from '@views/HomePage';
import Dashboard from '@views/Dashboard';
import Selection from '@views/Selection';
import AdPlatform from '@views/AdPlatform';
import BuryPoint from '@views/BuryPoint';
import Package from '@views/Package';
import UserPortrait from '@views/UserPortrait';
import Alternative from '@views/Alternative';
import AutoTest from '@views/AutoTest';

const routers: RouteObject[] = [
  {
    path: '/homepage',
    element: <HomePage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'selection',
        element: <Selection />
      },
      {
        path: 'adPlatform',
        element: <AdPlatform />
      },
      {
        path: 'buryPoint',
        element: <BuryPoint />
      },
      {
        path: 'package',
        element: <Package />
      },
      {
        path: 'userPortrait',
        element: <UserPortrait />
      },
      {
        path: 'alternative',
        element: <Alternative />
      },
      {
        path: 'autoTest',
        element: <AutoTest />
      }
    ]
  },
  // 重定向路由
  {
    path: '/',
    element: <Navigate to="/homepage/dashboard" />
  },
];
export default routers;
