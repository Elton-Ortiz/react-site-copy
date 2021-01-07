import Header from './components/header/header.js'
import Home   from './pages/home/home'
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
 return(
   <div>
  <Header></Header>
  <Switch>
      <Route path="/">
        <Home></Home>
      </Route>
  </Switch>
   </div>
 ) 
}

export default App;
