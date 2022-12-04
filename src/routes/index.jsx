import { Route, Switch } from "react-router-dom";
import { Homepage } from "../pages/home";

function Paths() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  );
}

export default Paths;
