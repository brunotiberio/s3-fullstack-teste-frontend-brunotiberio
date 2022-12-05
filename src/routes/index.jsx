import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/Register";


function Paths() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/user">
        <MainPage />
      </Route>
    </Switch>
  );
}

export default Paths;
