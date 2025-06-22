function FilterSidebar({ onClose }) {
  return (
    <div>
      {/* Close button for mobile */}
      <div className="d-md-none text-end mb-3">
        <button className="btn btn-sm btn-danger" onClick={onClose}>Close</button>
      </div>

      <h5 className="mb-3" style={{color:"red"}}>Filter Profiles</h5>

      {/* Gender */}
      <div className="mb-3">
        <label className="form-label">Gender</label>
        <select className="form-select">
          <option value="">All</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      {/* Age Range */}
      <div className="mb-3">
        <label className="form-label">Age Range</label>
        <div className="d-flex gap-2">
          <input type="number" className="form-control" placeholder="Min" />
          <input type="number" className="form-control" placeholder="Max" />
        </div>
      </div>

      {/* Religion */}
      <div className="mb-3">
        <label className="form-label">Religion</label>
        <select className="form-select">
          <option value="">All</option>
          <option>Hindu</option>
          <option>Muslim</option>
          <option>Christian</option>
          <option>Jain</option>
          <option>Sikh</option>
        </select>
      </div>

      {/* Caste */}
      <div className="mb-3">
        <label className="form-label">Caste</label>
        <input type="text" className="form-control" placeholder="Caste" />
      </div>

      {/* Mother Tongue */}
      <div className="mb-3">
        <label className="form-label">Mother Tongue</label>
        <input type="text" className="form-control" placeholder="Language" />
      </div>

      {/* Marital Status */}
      <div className="mb-3">
        <label className="form-label">Marital Status</label>
        <select className="form-select">
          <option value="">All</option>
          <option>Never Married</option>
          <option>Divorced</option>
          <option>Widowed</option>
          <option>Separated</option>
        </select>
      </div>

      {/* Country */}
      <div className="mb-3">
        <label className="form-label">Country</label>
        <select className="form-select">
          <option value="">All</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Singapore</option>
        </select>
      </div>

      {/* State */}
      <div className="mb-3">
        <label className="form-label">State</label>
        <input type="text" className="form-control" placeholder="State" />
      </div>

      {/* Education */}
      <div className="mb-3">
        <label className="form-label">Education</label>
        <select className="form-select">
          <option value="">All</option>
          <option>Bachelor's</option>
          <option>Master's</option>
          <option>Ph.D</option>
          <option>Diploma</option>
        </select>
      </div>

      {/* Occupation */}
      <div className="mb-3">
        <label className="form-label">Occupation</label>
        <input type="text" className="form-control" placeholder="Job / Profession" />
      </div>

      {/* Height */}
      <div className="mb-3">
        <label className="form-label">Height (cm)</label>
        <div className="d-flex gap-2">
          <input type="number" className="form-control" placeholder="Min" />
          <input type="number" className="form-control" placeholder="Max" />
        </div>
      </div>

      {/* Income */}
      <div className="mb-3">
        <label className="form-label">Income (Annual)</label>
        <select className="form-select">
          <option value="">All</option>
          <option>Below ₹2 LPA</option>
          <option>₹2 LPA - ₹5 LPA</option>
          <option>₹5 LPA - ₹10 LPA</option>
          <option>Above ₹10 LPA</option>
        </select>
      </div>

      {/* Manglik */}
      <div className="mb-3">
        <label className="form-label">Manglik</label>
        <select className="form-select">
          <option value="">Doesn't Matter</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
         <button
          style={{backgroundColor:"red"}}
            type="button"
            class="btn text-white"                                
          >
            Filter
          </button>
    </div>
  );
}

export default FilterSidebar;
