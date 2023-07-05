// import logo from './logo.svg';
import './App.css';
import Profile from './components/ProfilePage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import UploadWork from './components/UploadWork';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
            <Route exact path="/" component={Profile}/>
            <Route path="/reportform" component={UploadWork} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
