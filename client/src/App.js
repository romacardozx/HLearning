import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Privacy from "./components/Privacy/Privacy";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/privacy" component={Privacy} />
    </div>
  );
}

export default App;
