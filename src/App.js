import { version } from 'inferno';
import Component from 'inferno-component';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
    <header className="b4admin-topo">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark b4admin-menutopo">
            <a className="navbar-brand" href="#">
                <i className="fa fa-bars fa-lg b4admin-navbar-toogler" aria-expanded="false" aria-hidden="true" />
                <span className="b4admin-title"> Dashboard </span>
            </a>
            <div className="b4admin-menu-topo-right" >
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sair</a>
                  </li>
                </ul>
            </div>
       </nav>
    </header>
    <aside className="b4admin-menulateral b4admin-aside">
      <div className="b4admin-profile" style="text-align:center">
            <div className="card border-0">
                <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <img className="rounded-circle img-thumbnail"
                        src="http://wedesignthemes.com/html/role/images/post-images/profile-img4.jpg" width='80'/>
                        <br /><div className="mt-2 b4admin-profile-title">Marcos Vinicius Tomaz</div>
                      </li>
                  <li className="list-group-item">
                      <a className="btn btn-secondary btn-sm "  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Minha Conta
                      </a>
                  </li>
                </ul>
            </div>
      </div>
      <div className="b4admin-menulateral-body">
        <ul className="nav flex-column ">
          <li className="nav-item">
            <a className="nav-link active" href="index.html"><i className="fa fa-home"></i> Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fa fa-file"></i> File </a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropdown-toggle dropdown-menu-link" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i> Pages</a>
            <div className="b4admin-menudropdown">
              <a className="b4admin-menudropdown-item" href="example1.html"><i className="fa fa-link"></i> Example 1</a>
              <a className="b4admin-menudropdown-item" href="example2.html"><i className="fa fa-link"></i> Example 2</a>
              <a className="b4admin-menudropdown-item" href="login.html"><i className="fa fa-link"></i> Login</a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
    <main className="b4admin-content">
        <div className="b4admin-content-body">
            <div className="container-fluid">
                <div className="row" style="margin-bottom: 1em;">
                    <div className="col-md-12">
                      <div className="card b4admin-card">
                        <div className="card-header b4admin-header">
                          Register <a href="#" className="btn btn-primary">Novo</a>
                        </div>
                        <div className="card-body">
                          <div className="row" style="margin-bottom: 1em;">
                            <div className="col-md-12">
                              <form className="form-inline">
                              <div className="form-group">
                                <label for="staticEmail2" className="sr-only">Email</label>
                                <input type="text" className="form-control"  value="email@example.com" />
                              </div>
                              <div className="form-group mx-sm-3">
                                <label for="inputPassword2" className="sr-only">Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                              </div>
                              <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i> Search</button>
                            </form>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <table className="table table-stripedblue">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                  </tr>
                                </tbody>
                              </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="row" style="margin-bottom: 1em;">
                  <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                          Table Data
                        </div>
                        <div className="card-body">
                          <div className="row" style="margin-bottom: 1em;">
                            <div className="col-md-12">
                              <form className="form-inline">
                              <div className="form-group">
                                <label for="staticEmail2" className="sr-only">Email</label>
                                <input type="text" className="form-control"  value="email@example.com" />
                              </div>
                              <div className="form-group mx-sm-3">
                                <label for="inputPassword2" className="sr-only">Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                              </div>
                              <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i> Search</button>
                            </form>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <table className="table table-stripedblue">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                  </tr>
                                </tbody>
                              </table>
                              </div>
                            </div>
                          </div>
                        </div>
    
                        <div className="card-footer text-muted">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                              <li className="page-item"><a className="page-link" href="#">1</a></li>
                              <li className="page-item"><a className="page-link" href="#">2</a></li>
                              <li className="page-item"><a className="page-link" href="#">3</a></li>
                              <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                          </nav>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="row" style="margin-bottom: 1em;">
                  <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                          <a className="pull-right" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="true" aria-controls="multiCollapseExample1 multiCollapseExample2">
                               <i className="fa fa-chevron-right" aria-hidden="true"></i>
                          </a>
                        </div>
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                              <div className="card-body">
                                    sadasdas
                              </div>
                       </div>
    
    
    
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </main>
    </div>
    );
  }
}

export default App;
