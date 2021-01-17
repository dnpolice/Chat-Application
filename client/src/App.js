import './App.css';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Messaging/Home';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signin" exact component={SignIn}/>
        <Route path="/signup" exact component={Register}/>
        <PrivateRoute path="/" component={Home}/>
      </Switch>  
    </div>
  );
}

export default App;
