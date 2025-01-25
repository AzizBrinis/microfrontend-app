import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

const App = ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/sign-in">
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/sign-up">
              <SignUp onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
