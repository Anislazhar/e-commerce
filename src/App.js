import React from "react";
import { Route, Switch } from "react-router-dom";
import "./default.scss";
// Layouts
import MainLayout from "./Layouts/MainLayout/MainLayout";

// Pages
import Homepage from "./Pages/HomePage/Homepage";
import Registration from "./Pages/Registration/Registration";
import HomepageLayout from "./Layouts/HomepageLayout/HomepageLayout";

function App() {
  return (
    <div className="App">
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
      </Switch>
    </div>
  );
}

export default App;
