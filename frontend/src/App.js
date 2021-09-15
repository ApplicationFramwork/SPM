import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


import AdminDashboard from "./components/Admin-Dashboard";
import AttendanceMark from "./components/AttendanceMark";
import AddMarks from "./components/AddMarks";
import ViewAttendance from "./components/ViewAttendance";
import Login from "./components/login";
import Index from "./components";
import ViewMarks from "./components/ViewMarks";

function App() {
  return (
      <Router>

        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/login" exact component={Login} />
            <Route path="/viewMarks" exact component={ViewMarks} />
            <Route path="/dashboard" exact component={AdminDashboard} />
            <Route path="/MarkAttendance" exact component={AttendanceMark} />
            <Route path="/AddMarks" exact component={AddMarks} />
            <Route path="/ViewAttendance" exact component={ViewAttendance} />
        </Switch>
      </Router>
  );
}

export default App;
