import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DaBlog from './DaBlog';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/myblog/'>
              <Header />
              <DaBlog />
            </Route>
            <Route exact path='/myblog/blog/:id'>
              hell
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
