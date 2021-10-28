import { Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import CardCourse from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/card" component={CardCourse} />
    </div>
  );
}

export default App;
