import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import JobDetails from "./components/JobDetails/JobDetails";
import JobBoard from "./components/JobBoard/JobBoard";

const App = () => {

  return (
    <Router>
      <div className="wrapper">
      <Switch>
        <Route exact path="/" component={JobDetails}></Route>
        <Route exact path="/JobBoard" component={JobBoard}></Route>
        <Route render={() => <p>404</p>}></Route>
      </Switch>
      </div>
    </Router>
  );
};

export default App;
