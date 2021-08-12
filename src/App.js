import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import IndexPageComponent from './components/index';
import addTeacherComponent from './components/addTeacherComponent';
import assignSubjectsComponent from './components/assignSubjectsComponent';
import teacherDashboardComponent from './components/teacherDashboardComponent';
import sideNavBarComponent from './components/sideNavBarComponent';
import allocatedSubjectsComponents from './components/allocatedSubjectsComponents';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPageComponent}></Route>
        <Route path="/addTeacher" component={addTeacherComponent}></Route>
        <Route path="/assignSubjects" component={assignSubjectsComponent}></Route>
        <Route path="/teacherDashboard" component={teacherDashboardComponent}></Route>
        <Route path="/sidenav" component={sideNavBarComponent}></Route>
        <Route path="/allocatedSub" component={allocatedSubjectsComponents}></Route>
       

      </Switch>
    </Router>
  );
}

export default App;
