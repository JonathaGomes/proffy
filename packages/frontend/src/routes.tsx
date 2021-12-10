import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/give-classes"} exact component={TeacherForm} />
        <Route path={"/study"} exact component={TeacherList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
