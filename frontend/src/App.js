import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


import AdminDashboard from "./components/Admin-Dashboard";
import AttendanceMark from "./components/AttendanceMark";
import AddMarks from "./components/AddMarks";


function App() {
  return (
      <Router>

        <Switch>
            <Route path="/" exact component={AdminDashboard} />
            <Route path="/MarkAttendance" exact component={AttendanceMark} />
            <Route path="/AddMarks" exact component={AddMarks} />
        </Switch>
      </Router>
  );
}

export default App;
