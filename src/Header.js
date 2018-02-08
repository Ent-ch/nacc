import 'inferno';
import Component from 'inferno-component';
import cn from 'classnames';

export default class App extends Component {

  state = {
    open: true  
  }

  togleNav = () => {
    this.setState({ open: !this.state.open });
    this.props.onTogle();
  }
    
  render() {
    const { open } = this.state;

    return (
      <header className="b4admin-topo">
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark b4admin-menutopo">
              <a className="navbar-brand">
                  <i 
                    className={cn(["fa fa-lg b4admin-navbar-toogler",
                    {
                      'fa-bars': open,
                      'fa-close': !open 
                    }])}
                    onClick={this.togleNav}
                  />
                  <span className="b4admin-title">Simple CRM</span>
              </a>
              <div className="b4admin-menu-topo-right" >
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <a className="nav-link">Login</a>
                    </li>
                  </ul>
              </div>
        </nav>
      </header>
      );
  }
};
