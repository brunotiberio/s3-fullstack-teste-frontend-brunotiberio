import { Route, Switch } from "react-router-dom";
import ContactDetailPage from "../pages/ContactDetailPage";
import Home from "../pages/Home";
import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/Register";
import UserEditPage from "../pages/UserEditPage";

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
      <Route exact path="/user/edit">
        <UserEditPage />
      </Route>
      <Route exact path="/contact/detail">
        <ContactDetailPage />
      </Route>
    </Switch>
  );
}

export default Paths;
