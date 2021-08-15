import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import IndexPageComponent from './components/index';
import AdminStudentDashboard from "./components/AdminStudentDashboard";
import UpdateStudentDetails from "./components/UpdateStudentDetails";
import AdminSideNavBar from "./components/Admin-SideNavBar";
import AddNotices from "./components/AddNotices";
import Test from "./components/Test";
import AddViewDeleteNotices from "./components/Add-View-Delete_Notices";
import StudentDetailReports from "./components/studentDetailReports";
import studentDashboard from "./components/studentDashboard";
function App() {
  return (
    <Router>
      <Switch>
          <div>
              <Route path="/" exact component={IndexPageComponent}></Route>
              <Route path="/adminStudentDashboard" component={AdminStudentDashboard}></Route>
              <Route path="/updateStudent" component={UpdateStudentDetails}></Route>
              <Route path="/addNotice" component={AddNotices}></Route>
              <Route path="/notices" component={AddViewDeleteNotices}></Route>
              <Route path="/studentReport" component={StudentDetailReports}></Route>
              <Route path="/studentDashboard" component={studentDashboard}></Route>
              <Route path="/test" component={Test}></Route>

          </div>
        <Route path="/" exact component={IndexPageComponent}></Route>


      </Switch>
    </Router>
  );
}

export default App;
