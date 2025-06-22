import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="banner-img"></div>
      <section className="banner-bg-color">
        <div className="d-flex justify-content-between pt-3 mx-4">
          <div><img src="/images/logo.png" alt="" /></div>
          <div className="mt-4 mt-md-3 me-2">
            <Link to="/login" className="text-decoration-none text-white fs-4">
              Login
            </Link>{" "}
            <span className="fs-4 text-white">/</span>{" "}
            <Link
              to="/register"
              className="text-decoration-none text-white fs-4"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="hero text-white d-flex align-items-center bg">
          <div className="container text-center">
            <h1 className="display-4 fw-bold">Find Your Perfect Match</h1>
            <p className="lead">
              Trusted Matrimony Platform for Tamil Community
            </p>
            <Link to="/dashboard" className="btn btn-lg btn-light mt-3">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="about py-5 text-center"
        style={{ backgroundColor: "#efe4e4" }}
      >
        <div className="container">
          <h2>Why Choose Us?</h2>
          <p className="mt-3">
            100% verified profiles, privacy protected, cultural matches, and
            more!
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works py-5 bg-light">
        <div className="container text-center">
          <h2>How It Works</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <h4>1. Register</h4>
              <p>Create your free profile in just a few steps.</p>
            </div>
            <div className="col-md-4">
              <h4>2. Browse</h4>
              <p>Search and view matching profiles.</p>
            </div>
            <div className="col-md-4">
              <h4>3. Connect</h4>
              <p>Send interest and start conversation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-4 text-center text-white"
        style={{ backgroundColor: "#9c1f0b" }}
      >
        <p className="mb-0">© 2025 Tamil Matrimony | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
