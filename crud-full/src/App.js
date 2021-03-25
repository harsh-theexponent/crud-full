import React from 'react';
import './App.css';
//Import react routes and its other modules
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//All components
import AddUser from './adduser';
import Home from './home';
import Header from './header';
import Login from './Login';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Impoert axios services
// import axios from 'axios';
class App extends React.Component {
  
 
  render() {
   
    return (
      <Router>
      <div className="maincontainer">
        <Header></Header>
        
        <Switch>
            
            
            <Route exact path='/adduser' component={AddUser} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='' component={Home} />
           
          </Switch>
            
      
      
      </div>
      </Router>
)
};
}
export default App;