import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DaBlog from './components/Blogs/DaBlog';

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
