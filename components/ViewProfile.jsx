function ViewProfile({ viewProfileId }) {
  return (
    <>
      <div
        className="modal fade"
        id={`modal-${viewProfileId.id}`}
        tabIndex="-1"
        aria-labelledby={`label-${viewProfileId.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`label-${viewProfileId.id}`}>
                Profile: {viewProfileId.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={viewProfileId.image}
                    alt={viewProfileId.name}
                    className="img-fluid rounded mb-3 w-100"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-6">
                  <p>
                    <strong>Age:</strong> {viewProfileId.age}
                  </p>
                   <p>
                    <strong>Education:</strong> M.SC Computer Science
                  </p>
                   <p>
                    <strong>Salary:</strong> 300000 LPA
                  </p>
                  <p>
                    <strong>Religion:</strong> {viewProfileId.religion}
                  </p>
                  <p>
                    <strong>Caste:</strong> {viewProfileId.caste}
                  </p>
                  <p>
                    <strong>Location:</strong> {viewProfileId.location}
                  </p>
                  <p>
                    <strong>Gender:</strong> {viewProfileId.gender}
                  </p>
                  <p>
                    <strong>Phone Number:</strong> +91 ★★★★★ ★★★★★
                  </p>
                
                </div>
                  <div className="text-end">
                    <button
                      type="button"
                      className="btn btn-secondary px-4"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary ms-3">
                      Send Interest
                    </button>
                  </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProfile;
