import { Route, Switch } from "react-router-dom";
import ContactDetailPage from "../pages/ContactDetailPage";
import ContactEditPage from "../pages/ContactEditPage";
import CreateContactPage from "../pages/CreateContactPage";
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
      <Route exact path="/contact/create">
        <CreateContactPage />
      </Route>
      <Route exact path="/contact/detail">
        <ContactDetailPage /> 
      </Route>
      <Route exact path="/contact/edit">
        <ContactEditPage />
      </Route>
    </Switch>
  );
}

export default Paths;
