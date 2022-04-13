import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

// pages
import Index from "./views/pages/Index.js";
import PoliticalGlobal from "./views/pages/Political.js";
import BusinessGlobal from "./views/pages/Business.js";
import TechGlobal from "./views/pages/Technology.js";
import ScienceGlobal from "./views/pages/Science.js";
import SportsGlobal from "./views/pages/Sport.js";

import BusinessLocal from "./views/pages/_Business.js";
import NewsLocal from "./views/pages/_News.js";
import SportLocal from "./views/pages/_Sport.js";
import Weather from "./views/pages/Weather";


import LandingPage from "./views/routes/LandingPage.js";
import ProfilePage from "./views/routes/ProfilePage.js";
import RegisterPage from "./views/routes/RegisterPage.js";
import Login from "./views/routes/Login.js";
import PrivateRoute from "./views/routes/PrivateRoute.js";
// others

import { store } from "store";
import { loadUser } from "_actions/user.actions.js";

function App() {

  React.useEffect(() => {
    const token = localStorage.getItem("token");
      if (token) {
        store.dispatch(loadUser());
      }
  }, [])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/global-political"
          render={(props) => <PoliticalGlobal {...props} />}
        />
         <Route
          path="/global-business"
          render={(props) => <BusinessGlobal {...props} />}
        />
        <Route
          path="/global-tech"
          render={(props) => <TechGlobal {...props} />}
        />
         <Route
          path="/global-science"
          render={(props) => <ScienceGlobal {...props} />}
        />
         <Route
          path="/global-sport"
          render={(props) => <SportsGlobal {...props} />}
        />
         <Route
          path="/local-news"
          render={(props) => <NewsLocal {...props} />}
        />
        <Route
          path="/local-business"
          render={(props) => <BusinessLocal {...props} />}
        />
        <Route
          path="/local-sport"
          render={(props) => <SportLocal {...props} />}
        />
        <Route
          path="/weather"
          render={(props) => <Weather {...props} />}
        />

      {/*  <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />*/}
        <PrivateRoute path="/profile-page" component={ProfilePage} />
        <Route
          path="/register"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
