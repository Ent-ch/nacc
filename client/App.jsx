import { render, Component } from 'inferno';
import { HashRouter, Route, Redirect, Link, Switch } from 'inferno-router';

import ImageUpload from './components/ImageUpload.jsx';
import DeatailsPage from './components/DeatailsPage.jsx';
import ListPage from './components/ListPage.jsx';

import 'surface/src/scss/surface_styles.scss';
import './App.scss';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const Home = props => {
  return <div className="sendBlock">
    <ImageUpload onSend={props.handleSend} />
  </div>;
};

const List = props => {
  return <ListPage />;
};

const Detail = ({ match: { params: { id }}}) => <DeatailsPage id={id} />;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      url: null,
      gps: {
        lt: 42,
        ln: 38,
      },
      timeFoto: null,
    };

    this.handleSend = this.handleSend.bind(this);
  }

  handleSend(url, gps, timeFoto) {
    this.setState({sent: true, url, gps, timeFoto});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sent) {
      this.setState({sent: false});
    }
  }

  render() {
    const { sent, url, gps, timeFoto } = this.state;

    return (<HashRouter>
      <div className="g--12 no-margin-vertical appMain">
        {sent && <Redirect to="/new"/>}

        <Switch>
          <Route exact path="/" component={() => <Home handleSend={this.handleSend} />} />
          <Route path="/latest" component={List} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>

        <footer className="g--12">
          <div className="text-center">
            <Link to="/">Nacc</Link>
          </div>
        </footer>
      </div>
      </HashRouter>
    );
  }
}

render(
  <App />,
  document.getElementById("app")
);