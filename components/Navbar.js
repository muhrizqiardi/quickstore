import Image from 'next/image'
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="/assets/brand/Logo Text White.svg" height="50px" alt='logo' />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="mx-md-auto my-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" aria-label="Search store" aria-describedby="button-addon1" />
              <button className="btn btn-outline-light" type="button" id="button-addon1"><i className="bi bi-search" /></button>
            </div>
          </div>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#"><i className="bi bi-bell" /><span className="ms-3 d-sm-inline-block d-lg-none">Notification</span></a>
            <a className="nav-link" href="#"><i className="bi bi-chat-left " /><span className="ms-3 d-sm-inline-block d-lg-none">Chat</span></a>
            <a className="nav-link" href="#"><i className="bi bi-basket" /><span className="ms-3 d-sm-inline-block d-lg-none">Account</span></a>
            {false ? <a className="nav-link active" href="#"><i className="bi bi-person-circle" /><span className="ms-3 d-sm-inline-block d-lg-none">Account</span></a> : <a className="btn btn-outline-light ms-md-2" href="#">Log In</a>}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
