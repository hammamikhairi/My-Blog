import { NotificationsProvider } from '@mantine/notifications';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import DaBlog from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <NotificationsProvider>
      <Router hashType='slash'>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header />
              <DaBlog />
              <Footer mode="Coded" />
            </Route>
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            <Route exact path="/blog/:id">
              <Blog />
              <Footer mode="Written" />
            </Route>
            <Route path="*">
              <h1>Made with ♥ by Khairi</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </NotificationsProvider>
  );
}

export default App;
