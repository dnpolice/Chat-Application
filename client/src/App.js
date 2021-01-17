import './App.css';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Messaging/Home';

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" exact component={Register}/>
        <Route path="/messaging" exact component={Home}/>
        <Route path="/" component={Register}/>
      </Switch>  
    </div>
  );
}

export default App;
