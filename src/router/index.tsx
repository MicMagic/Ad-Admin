// 声明式路由
import React from 'react';
import { RouteObject } from 'react-router-dom';
import HomePage from '../views/HomePage';

const routers: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    children: []
  }
];
export default routers;
