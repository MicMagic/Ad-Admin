import React from 'react';
import { useRoutes } from 'react-router-dom';

export default function Routers() {
  const routes = [
    {
      path: '',
      element: '',
      children: []
    }
  ];
  return <>{useRoutes(routes)}</>;
}
