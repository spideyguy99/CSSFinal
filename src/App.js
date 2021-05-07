import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './components/navigation';
import Footer from "./components/footer";
import Home from './components/home';
import Flavors from "./components/flavors";
import Contact from "./components/contact";
import About from "./components/about";

function App() {
  return (
    <div className={"appHolder"}>
      <Router>
        <Nav/>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/flavors'}  component={Flavors}/>
          <Route path={'/about'}  component={About}/>
          <Route path={'/contact'}  component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
