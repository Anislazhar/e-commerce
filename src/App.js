import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./Redux/User/user.action";

import "./default.scss";
// Layouts
import MainLayout from "./Layouts/MainLayout";
import HomepageLayout from "./Layouts/HomepageLayout";
import AdminLayout from "./Layouts/AdminLayout";
import DashboardLayout from "./Layouts/DashboardLayout";

// Pages
import Homepage from "./Pages/HomePage/Homepage";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Recovery from "./Pages/Recovery/Recovery";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Admin from "./Pages/Admin";

//hoc
import WithAuth from "./hoc/WithAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

// // components
import AdminToolbar from "./Components/AdminToolbar";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
