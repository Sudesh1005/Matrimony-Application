import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  let handleSubmit = ()=>{
    navigate('/dashboard');
  };
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="images/matrimony-img.jpg"
              className="img-fluid vh-100"
              alt=""
            />
          </div>
          <div className="col-md-6 ">
            <div className="login-bg-image"></div>
             <div className="black-overlay"></div>
             <h1 className="text-center mt-4 heading">Welcom To Matrimony</h1>
            <div className="row align-items-center" style={{height:"77vh"}}>
              <div className="col-sm-7 mx-auto">
                <h3 className="text-center">Login</h3>
                <div className="container mt-4">
                  <form>
                    <div className="mb-3">
                      {/* <label for="name" className="form-label">
                        Name
                      </label> */}
                      <input
                        type="text"
                        className="form-control p-2"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div class="mb-3 mt-4">
                      {/* <label for="password" class="form-label">
                        Password
                      </label> */}
                      <input
                        type="password"
                        class="form-control p-2"
                        id="password"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <button onClick={handleSubmit} type="submit" className="btn btn-primary border-0" style={{backgroundColor:"#9c1f0b"}}>
                       Login
                      </button>
                    </div>
                  </form>
                  <p className="text-center mt-3">Creact an Account <Link to="/register" className="text-decoration-none">Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
