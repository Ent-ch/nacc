export default () => {
  return (
    <main className="b4admin-content">
    <div className="b4admin-content-body">
        <div className="container-fluid">
            <div className="row" style={{'margin-bottom': '1em'}}>
                <div className="col-md-12">
                  <div className="card b4admin-card">
                    <div className="card-header b4admin-header">
                      Register <a href="#" className="btn btn-primary">Novo</a>
                    </div>
                    <div className="card-body">
                      <div className="row" style={{'margin-bottom': '1em'}}>
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
);
};
