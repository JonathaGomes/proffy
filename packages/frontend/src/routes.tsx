import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import SignUp from "./pages/SignUp";
import TeacherList from "./pages/TeacherList";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/signup"} exact component={SignUp} />
        <Route path={"/give-classes/success"} exact component={Success} />
        <Route path={"/study"} exact component={TeacherList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
