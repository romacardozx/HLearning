import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Courses from "./components/Courses/Courses";
import Privacy from "./components/Privacy/Privacy"
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
