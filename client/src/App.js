import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/">

        </Route>
      </Switch>
    </div>
  );
}

export default App;
