export default () => {
  return (
      <div className="container-fluid">
          <div className="row" style="margin-bottom: 1em;">
            <div className="col-md-12">
              <div className="card">
                  <div className="card-header">
                    Table Data
                  </div>
                  <div className="card-body">
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
      </div>
  );
};
