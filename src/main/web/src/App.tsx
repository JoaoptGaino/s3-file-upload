import React, { useState, useEffect } from "react";
import { api } from "./services/api";
import "./App.css";
import { MyDropzone } from "./components/Dropzone";

const UserProfiles = () => {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);
  const fetchUserProfiles = () => {
    api.get("/user-profile").then((response) => {
      console.log(response);
      setUserProfiles(response.data);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);
  return (
    <>
      {userProfiles.map((userProfile, i) => {
        return (
          <div key={i}>
            {/* profile image */}
            <br />
            <br />
            <h1>{userProfile.username}</h1>
            <p>{userProfile.userProfileId}</p>
            <MyDropzone {...userProfile} />
            <br />
          </div>
        );
      })}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <UserProfiles />
    </div>
  );
}

export default App;
