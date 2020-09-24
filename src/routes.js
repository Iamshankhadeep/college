import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/Layout";

const AppRoute = ({
  component: Component,
  layout: Layout,
  showNavbar,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout showNavbar={showNavbar}>
        <Component {...props} />
      </Layout>
    )}
  />
);

AppRoute.defaultProps = {
  showNavbar: true,
};

// Controls routing of entire app
const Routes = () => {
  //   const location = useLocation();

  return (
    <Switch>
      <AppRoute exact path="/" layout={Layout} component={Home} />
    </Switch>
  );
};

export default Routes;
