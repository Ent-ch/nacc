import 'inferno';
import Component from 'inferno-component';

import Header from './Header';
import Aside from './Aside';
import Main from './Main';

import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {

  state = {
    openNav: true,
  }

  handleTogle = () => {
    this.setState({ openNav: !this.state.openNav });
  }

  render() {
    const { openNav } = this.state;
    const leftPos = openNav ? '-230px' : '0';
    console.log(leftPos, openNav);
  
    return (
      <div>
        <Header onTogle={this.handleTogle} />
        <Aside leftPos={leftPos} />
        <Main />
      </div>
    );
  }
}

export default App;
