export default ({ leftPos = '0' }) => {
  return (
    <aside className="b4admin-menulateral b4admin-aside" style={{ left: leftPos }} >
      <div className="b4admin-profile" style={{ textAlign: 'center'}}>
            <div className="card border-0">
                <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <img className="rounded-circle img-thumbnail"
                        src="http://wedesignthemes.com/html/role/images/post-images/profile-img4.jpg" width='80'/>
                        <br /><div className="mt-2 b4admin-profile-title">Marcos Vinicius Tomaz</div>
                      </li>
                  <li className="list-group-item">
                      <a className="btn btn-secondary btn-sm" href="#aa" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Minha Conta
                      </a>
                  </li>
                </ul>
            </div>
      </div>
      <div className="b4admin-menulateral-body">
        <ul className="nav flex-column ">
          <li className="nav-item">
            <a className="nav-link active"><i className="fa fa-home"></i> Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fa fa-file"></i> File </a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropdown-toggle dropdown-menu-link" href="#aa" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i> Pages</a>
            <div className="b4admin-menudropdown">
              <a className="b4admin-menudropdown-item" href="#aa"><i className="fa fa-link"></i> Example 1</a>
              <a className="b4admin-menudropdown-item" href="#bb"><i className="fa fa-link"></i> Example 2</a>
              <a className="b4admin-menudropdown-item" href="#cc"><i className="fa fa-link"></i> Login</a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};
