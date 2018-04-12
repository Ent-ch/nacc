export default () => {
  return (
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
              </div>
            </div>
          </div>
      </div>
  );
};
