import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blogs/Blog/Blog';
import DaBlog from './components/Blogs/DaBlog';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NavbarPhantom from './components/Navbar/NavbarPhantom';

function App() {
  return (
    <Router hashType='slash'>
      <Navbar />
      <NavbarPhantom />
      <div className="App">
        <Switch>
          <Route exact path="/">
           <Header />
           <DaBlog />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog/:id">
            <Blog />
          </Route>
          <Route path="*">
            <h1>this is the default route</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
