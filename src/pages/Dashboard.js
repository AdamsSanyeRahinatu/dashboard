import { useContext } from "react";
import { Route, Switch } from "react-router";
import "../App.css"
import {UserContext} from "../context/UsersContext"
import ExpensePage from "./ExpensePage";
import HomePage from "./HomePage";
import IncomePage from "./IncomePage";
import TodoPage from "./TodoPage";
import Header from "../components/Header";
import SideBar from "../components/SideBar"

const Dashboard = () => {

  return (
    <main class="Dashboard">
      <Header />
      <section id="dashboard">
     <SideBar />
        <article>
          <Switch>
            <Route path="/dashboard" component={HomePage} />
            <Route path="/income" component={IncomePage} />
            <Route path="/expenses" component={ExpensePage} />
            <Route path="/todos" component={TodoPage} />
          </Switch>
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
