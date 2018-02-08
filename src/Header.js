export default ({  }) => {
  return (
    <header className="b4admin-topo">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark b4admin-menutopo">
            <a className="navbar-brand" href="#">
                <i className="fa fa-bars fa-lg b4admin-navbar-toogler" aria-expanded="false" aria-hidden="true" />
                <span className="b4admin-title">Simple CRM</span>
            </a>
            <div className="b4admin-menu-topo-right" >
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                  </li>
                </ul>
            </div>
       </nav>
    </header>
  );
};
