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
import DeleteCourse from "./components/PanelAdmin/DeleteCourse";
import DetailUser from "./components/Detail/DetailUser";
import Review from "./components/Review/Review"
import CreateCourse from "./components/PanelAdmin/CreateCourse";
import CreateCategory from "./components/PanelAdmin/CreateCategory";
import Cart from "./components/Cart/Cart";
import EditProfile from "./components/UserProfile/EditProfile"
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute"
import CourseDetail from "./components/PanelAdmin/CourseDetail";
import AdmUsers from "./components/PanelAdmin/AdmUsers";
import PaymentDetail from "./components/PaymentDetail/PaymentDetail";
import PaymentFailure from "./components/PaymentDetail/PaymentFailure";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <PrivateRoute exact path="/user" component={UserProfile} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/courses/:id" component={Detail} />
      <AdminRoute exact path="/admin" component={PruebaAdm} />
      <Route exact path="/admcourses" component={DeleteCourse} />
      <Route exact path="/mycourses/:id" component={DetailUser} />
      <Route exact path="/createcourse" component={CreateCourse} />
      <Route exact path="/review" component={Review} />
      <Route exact path="/createcategory" component={CreateCategory} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/editprofile" component={EditProfile} />
      <Route exact path="/admusers" component={AdmUsers} />
      <Route exact path="/courseDetail/:id" component={CourseDetail}/>
      <Route exact path="/orders/:id" component={PaymentDetail}/>
      <Route exact path="/prueba" component={PaymentFailure}/>
    </div>
  );
}

export default App;
