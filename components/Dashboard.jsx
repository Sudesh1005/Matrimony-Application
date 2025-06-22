import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import ProfileCard from "./ProfileCard";
import dummyProfiles from "../components/profiles.json";

function Dashboard() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <div className="container-fluid dashboard">
        <div className="row">
          {/* Sidebar - Desktop visible, Mobile conditional */}
          <div
            className={`col-md-3  p-3 filter-sidebar ${
              showFilter ? "mobile-show" : ""
            }`}
          >
            <FilterSidebar onClose={() => setShowFilter(false)} />
          </div>

          {/* Main content */}
          <div
            className="col-md-9 p-0 profile-card-section"
            style={{ backgroundColor: "#e6e7ea" }}
          >
            <div
              className="d-none d-md-flex align-items-center justify-content-between mb-3 p-2"
              style={{
                position: "sticky",
                top: "0",
                zIndex: "1000",
                backgroundColor: "#f4f4f6",
              }}
            >
              <div><h5 className="mb-0" style={{color:"red"}}>Sudesh T</h5></div>
             <div className="dropdown">
      <button
        className="btn rounded-2 border-0 p-2 text-white dropdown-toggle"
        style={{ backgroundColor: "red" }}
        type="button"
        id="accountDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-user"></i> Your Account
      </button>
      <ul className="dropdown-menu" aria-labelledby="accountDropdown">
        <li>
          <a className="dropdown-item" href="#profile">
            <i className="fas fa-user-circle me-2"></i> Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#settings">
            <i className="fas fa-cog me-2"></i> Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#notifications">
            <i className="fas fa-bell me-2"></i> Notifications
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item text-danger" href="#logout">
            <i className="fas fa-sign-out-alt me-2"></i> Logout
          </a>
        </li>
      </ul>
    </div>
            </div>
            <div className="p-0 p-md-3">
              {/* Mobile filter button */}
              <div
                className="d-md-none text-end p-3"
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1000",
                  backgroundColor: "#ecd6d6",
                }}
              >
                <div className="d-flex justify-content-between align-item-center">
                  <div>
                    <h6 className="mb-0">
                      <i
                        class="fas fa-user mt-2"
                        style={{
                          border: "2px solid black",
                          padding: "5px",
                          borderRadius: "50%",
                        }}
                      ></i>
                      <span className="fs-5 ms-2"> 
                        Sudesh T</span>{" "}
                    </h6>
                  </div>

                  <button
                    className="btn btn-outline-dark"
                    onClick={() => setShowFilter(true)}
                  >
                    ☰ Filter
                  </button>
                </div>
              </div>

              {/* Profiles */}
              <div className="row">
                {dummyProfiles.map((profile) => (
                  <div className="col-sm-6 col-lg-4 mb-4" key={profile.id}>
                    <ProfileCard profile={profile} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
