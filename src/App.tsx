import React from 'react';
import routers from './router';
import { useRoutes } from 'react-router-dom';

const App: React.FC = () => {
  const routerElement = useRoutes(routers);
  return (
    <>
      {routerElement}
    </>
  );
};

export default App;
