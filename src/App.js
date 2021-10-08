import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './pages/Create';
import Tacos from './pages/Tacos';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Tacos />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
