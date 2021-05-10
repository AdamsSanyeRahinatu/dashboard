import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { UserContext } from "./context/UsersContext";
import LoginScreen from "./pages/LoginScreen";
import IncomePage from "./pages/IcomePage"
import RegisterUserScreen from "./pages/RegisterUserScreen";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route path="/" exact>
        {user ? <Redirect to="/login"/>:<Redirect to="/dashboard"/> }
      </Route>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/register" component={RegisterUserScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/income" component={IncomePage} />
      <Route path="/expenses" component={ExpensePage} />

      
    </Switch>
  );
};

export default App;
