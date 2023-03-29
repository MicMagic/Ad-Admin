import React from 'react';
import routers from './router';
import { useRoutes } from 'react-router-dom';

function App() {
  const routerElement = useRoutes(routers);
  return (
    <>
      {routerElement}
    </>
  );
}

export default App;
