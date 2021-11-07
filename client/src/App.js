import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Courses from "./components/Courses/Courses";
import Privacy from "./components/Privacy/Privacy";
import Contact from "./components/Contact/Contact";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PruebaAdm from "./components/PanelAdmin/PruebaAdm"
import UserProfile from "./components/UserProfile/UserProfile";
<<<<<<< HEAD
import CreateCourse from "./components/PanelAdmin/CreateCourse"
=======
import DeleteCourse from "./components/PanelAdmin/DeleteCourse";
>>>>>>> 1db55a7241dad40c2c1edbb162e07a5f39acaf4f

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/user" component={UserProfile} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/courses/:id" component={Detail} />
      <Route exact path="/prueba" component={PruebaAdm} />
<<<<<<< HEAD
      <Route exact path="/create" component={CreateCourse} />
=======
      <Route exact path="/prueba2" component={DeleteCourse} />
>>>>>>> 1db55a7241dad40c2c1edbb162e07a5f39acaf4f
    </div>
  );
}

export default App;
