import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Login(props) {
  return (
    <>
      <Navbar />
      <div className="container">
        <form className="card my-3 p-3 mx-auto" style={{ width: 400 }}>
          <h3 className="center fw-bold">Log In</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Login;
