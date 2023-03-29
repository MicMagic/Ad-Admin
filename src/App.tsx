import React from 'react';
import routers from './router';
import { useRoutes } from 'react-router-dom';
import './App.scss';

function App() {
  const routerElement = useRoutes(routers);
  return (
    <>
      {routerElement}
    </>
  );
}

export default App;
