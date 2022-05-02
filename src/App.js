import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import DaBlog from './components/Blogs/DaBlog';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NavbarPhantom from './components/Navbar/NavbarPhantom';

function App() {
  return (
    <Router>
      <Navbar />
      <NavbarPhantom />
      <div className="App">
        <Switch>
          <Route exact path="/myblog">
           <Header />
           <DaBlog />
          </Route>
          <Route exact path="/myblog/about">
            <About />
          </Route>
          <Route path="*">
            default
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
