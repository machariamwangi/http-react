import React,{Component} from 'react';
import './App.css';
// import DisplayList from './components/DisplayList';
// import UserForm from './components/UserForm';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
/** Layouts **/  
import LoginLayoutRoute from "./components/LoginLayout";  
import DashboardLayoutRoute from "./components/DashboardLayout";  
  
/** Components **/  
import UserPage from './components/UserPage';  
import LoginPage from './components/LoginPage';
import { render } from '@testing-library/react';

class App extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/layout1" />  
          </Route>  
          <LoginLayoutRoute path="/layout1" component={LoginPage} />  
          <DashboardLayoutRoute  path="/layout2" component={UserPage} />  
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default App;   