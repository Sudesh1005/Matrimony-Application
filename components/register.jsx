import { useNavigate } from "react-router-dom";
function Register() {
  let navigate = useNavigate()
  let handleSubmit = ()=>{
    navigate("/dashboard")
  }
  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-md-6 d-none d-md-block">
          <img
            src="images/matrimony-img.jpg"
            className="img-fluid vh-100"
            alt="Matrimony"
          />
        </div>
        <div className="col-md-6">
          <div className="login-bg-image"></div>
          <div className="black-overlay"></div>
          <h1 className="text-center mt-4 heading">Welcome to Matrimony</h1>
          <div className="row align-items-center" style={{ height: "77vh" }}>
            <div className="col-sm-10 mx-auto">
              <h3 className="text-center mb-3">Register</h3>
              <div className="container mt-4">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control p-2"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control p-2"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-0 mt-md-2">
                    <div className="col-md-6 mb-3">
                      <input
                        type="tel"
                        className="form-control p-2"
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control p-2"
                        placeholder="Mother Tongue"
                      />
                    </div>
                  </div>
                  <div className="row mt-0 mt-md-2 mt-0 mt-md-2">
                    <div className="col-md-6 mb-3">
                      <select className="form-select p-2" defaultValue="">
                        <option value="" disabled>
                          Marital Status
                        </option>
                        <option value="never_married">Never Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control p-2"
                        placeholder="Country / State"
                      />
                    </div>
                  </div>
                  <div className="row mt-0 mt-md-2">
                    <div className="col-md-6 mb-3">
                      <select className="form-select p-2">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
                        type="date"
                        className="form-control p-2"
                        placeholder="Date of Birth"
                      />
                    </div>
                  </div>
                  <div className="row mt-0 mt-md-2">
                    <div className="col-md-6 mb-3">
                      <input
                        type="password"
                        className="form-control p-2"
                        placeholder="Password"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
                        type="password"
                        className="form-control p-2"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button
                    onClick={handleSubmit}
                      type="submit"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#9c1f0b" }}
                    >
                      Register
                    </button>
                  </div>
                </form>

                <p className="text-center mt-3">
                  Already have an account?{" "}
                  <a href="/Matrimony-Applicatio/login" className="text-decoration-none">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
