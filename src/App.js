import './App.js';
import './css/style.css';
import './css/style2.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Content from './components/Content';
import Error from './components/Error.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

// import { faRandom } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div>
        <Switch>
          <Route path="/member" component={Content} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={Error} />
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
