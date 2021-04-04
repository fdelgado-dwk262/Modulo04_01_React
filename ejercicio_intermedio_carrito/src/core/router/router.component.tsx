import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  LoginScene,
  GalleryListScene,
  SubmoduleListScene,
} from 'scenes';

export const RouterComponent: React.FC<any> = () => {

  return (
    <Router>
      <Route
        exact={true}
        path={[switchRoutes.root, switchRoutes.login]}
        component={LoginScene}
      />
      <Route
        exact={true}
        path={switchRoutes.gallerys}
      >
        <GalleryListScene/>
      </Route>
      
      <Route
        exact={true}
        // path={[switchRoutes.root, switchRoutes.submoduleList]}
        path={switchRoutes.submoduleList}
      >
          <SubmoduleListScene/>
      </Route>
    </Router>
  );
};
