import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import IndexPageComponent from './components/index';
import addTeacherComponent from './components/addTeacherComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPageComponent}></Route>
        <Route path="/addTeacher" component={addTeacherComponent}></Route>
       

      </Switch>
    </Router>
  );
}

export default App;
