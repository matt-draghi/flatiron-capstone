import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        

      </Switch>
    </div>
  );
}

export default App;
