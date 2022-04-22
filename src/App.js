import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Works from "./components/Works";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path={["/", "/#about", "/#projects"]}>
            <Banner />
            <Works />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
