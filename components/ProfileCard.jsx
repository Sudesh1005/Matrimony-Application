import ViewProfile from "./ViewProfile";

function ProfileCard({ profile }) {
  return (
    <>
      <div className="card h-100 shadow border-0">
        <img
          src={profile.image}
          className="card-img-top p-2"
          alt="Profile"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{profile.name}</h5>
          <p className="card-text">
            Age: {profile.age}
            <br />
            Religion: {profile.religion}
            <br />
            Caste: {profile.caste}
            <br />
            Location: {profile.location}
          </p>
          <button
          style={{backgroundColor:"red"}}
            type="button"
            class="btn text-white"
            data-bs-toggle="modal"
            data-bs-target={`#modal-${profile.id}`}
          >
            View Profile
          </button>
        </div>
      </div>

      <ViewProfile viewProfileId={profile}/>
    </>
  );
}

export default ProfileCard;
