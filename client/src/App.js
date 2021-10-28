import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Card from "./components/Card/Card";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/card" component={Card} />
      {/* <Route exact path="/card" component={Courses} /> */}
    </div>
  );
}

export default App;
