import './App.css';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div >
      <Switch>
            <Route path="/signin" exact component={SignIn}/>
            <Route path="/signup" exact component={Register}/>
            <Route path="/" exact component={Register}/>
          </Switch>  
    </div>
  );
}

export default App;
