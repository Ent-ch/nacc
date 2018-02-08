import { version } from 'inferno';
import Component from 'inferno-component';

import Header from './Header';
import Aside from './Aside';
import Main from './Main';

import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Aside />
      <Main />
    </div>
    );
  }
}

export default App;
