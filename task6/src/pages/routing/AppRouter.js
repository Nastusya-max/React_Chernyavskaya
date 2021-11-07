import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Switch>
      {localStorage.getItem('isLogin') === 'true' && authRoutes.map(({ path, component }) =>
        <Route key={path} path={path} component={component} exact/>
      )}
      {publicRoutes.map(({ path, component }) =>
        <Route key={path} path={path} component={component} exact/>
      )}
      <Redirect replace to="/" />
    </Switch>
  );
}

export default AppRouter;