import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import IndexPageComponent from './components/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPageComponent}></Route>
       

      </Switch>
    </Router>
  );
}

export default App;
