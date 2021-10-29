import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Card from "./components/Card/Card";
//import Courses from "./components/Courses/Courses";
import Privacy from "./components/Privacy/Privacy"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/card" component={Card} />
      {/* <Route exact path="/card" component={Courses} /> */}
      <Route exact path="/privacy" component={Privacy} />
    </div>
  );
}

export default App;
