import logo from './logo.svg';
import './App.css';
import Body from './BodyComponent.js';
import Heading from './heading.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

 function App() {
  return (
    <>
      <Router>
        <Heading />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
        
        
        <Body />
      

      
    </>
  );
}

export default App;
