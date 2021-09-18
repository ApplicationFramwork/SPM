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
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs";

import teacherDashboardComponent from './components/teacherDashboardComponent';
import allocatedSubjectsComponents from './components/allocatedSubjectsComponents';
import backEndTeacherComponent from './components/backEndTeacherComponent';
import BackEndSubjectComponent from './components/BackEndSubjectComponent';
import subjectDetailsComponent from './components/subjectDetailsComponent';
import StudetnsubjectDetailsComponent from './components/studentSubjectdetialsComponent';
import sstudentallocatedsubjects from './components/StudentAllocatedSubject';
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
              <Route path="/about" component={AboutUs}></Route>
              <Route path="/test" component={Test}></Route>
              <Route path="/contact" component={ContactUs}></Route>

              <Route path="/teacherDashboard" component={teacherDashboardComponent}></Route>
              <Route path="/allocatedSub" component={allocatedSubjectsComponents}></Route>
              <Route path="/studentallocatedSub" component={sstudentallocatedsubjects}></Route>
              <Route path="/subjectdetails/:id" component={subjectDetailsComponent}></Route>
              <Route path="/Studentsubjectdetails/:id" component={StudetnsubjectDetailsComponent}></Route>
              <Route path="/BackendTeacher" component={backEndTeacherComponent}></Route>
              <Route path="/BackendSubject" component={BackEndSubjectComponent}></Route>


          </div>
        <Route path="/" exact component={IndexPageComponent}></Route>


      </Switch>
    </Router>
  );
}

export default App;
