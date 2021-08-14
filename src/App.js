import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminSideNavBar from './components/Admin-SideNavBar';

//import components
import IndexPageComponent from './components/index';
import teacherDashboardComponent from './components/teacherDashboardComponent';
import allocatedSubjectsComponents from './components/allocatedSubjectsComponents';
import backEndTeacherComponent from './components/backEndTeacherComponent';
import BackEndSubjectComponent from './components/BackEndSubjectComponent';
import subjectDetailsComponent from './components/subjectDetailsComponent';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/AdminSideNavBar" component={AdminSideNavBar}></Route>

        <Route path="/" exact component={IndexPageComponent}></Route>
        <Route path="/teacherDashboard" component={teacherDashboardComponent}></Route>
        <Route path="/allocatedSub" component={allocatedSubjectsComponents}></Route>
        <Route path="/subjectdetails/:id" component={subjectDetailsComponent}></Route>
        <Route path="/BackendTeacher" component={backEndTeacherComponent}></Route>
        <Route path="/BackendSubject" component={BackEndSubjectComponent}></Route>
       

      </Switch>
    </Router>
  );
}

export default App;
