import React, { useContext } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import { Context } from "../../index";
import { authRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
  const { user } = useContext(Context)

  return (
    <Switch>
      {user.isAuth && authRoutes.map(({ path, component }) =>
        <Route key={path} path={path} component={component} exact />
      )}
      {publicRoutes.map(({ path, component }) =>
        <Route key={path} path={path} component={component} exact />
      )}
      <Redirect replace to="/" />
    </Switch>
  );
}

export default AppRouter;