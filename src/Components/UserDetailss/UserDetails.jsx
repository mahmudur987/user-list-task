/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import "./UserDetails.css";
export const UserDetails = ({ selectedData }) => {
  if (!selectedData) {
    return (
      <div className=" w-100 d-flex flex-column gap-3 position-sticky top-0 ">
        <div className="UserDetailsHeader">
          <h1>USER DETAILS</h1>{" "}
        </div>

        <h2 className=" mx- text-danger fs-3">please click on a user</h2>
      </div>
    );
  }

  const [Error, setError] = useState(false);
  const [loading, setloading] = useState(true);

  const handleImageError = () => {
    setError(true);
    setloading(false);
  };

  useEffect(() => {
    setError(false);
    setloading(true);
  }, [selectedData]);
  const { Bio, avatar, jobTitle, profile } = selectedData;

  const { username, firstName, lastName, email } = profile;
  console.log(Error);
  return (
    <div className=" w-100 d-flex flex-column gap-3 position-sticky top-0">
      <div className="UserDetailsHeader">
        <h1>USER DETAILS</h1>{" "}
      </div>

      <div className="w-75 mx-auto d-grid align-items-center gap-3">
        <div className="d-flex flex-column align-items-center gap-3 ">
          <p className="imageWraooer">
            {loading && <p className=" fw-bolder"> Image is loading . . .</p>}

            {Error && !loading && <p>no image available</p>}
            {!Error && !loading && (
              <img
                className="img-fluid rounded-circle "
                src={avatar}
                alt="Profile picture"
                onLoad={() => {
                  setloading(false);
                  setError(false);
                }}
                onError={handleImageError}
              />
            )}
            <img
              style={{ height: "0px", width: "0px" }}
              className="img-fluid rounded-circle "
              src={avatar}
              alt="Profile picture"
              onLoad={() => {
                setloading(false);
                setError(false);
              }}
              onError={handleImageError}
            />
          </p>

          <p className="fw-bolder">@ {username}</p>
        </div>
        <div>
          <h3 className="border border-dark p-2 fs-4 fw-bolder">
            {Bio ? Bio : "no Bio"}
          </h3>
        </div>
        <div className="fw-bolder">
          <p>Full Name</p>
          <h4>
            {firstName} {lastName}{" "}
          </h4>
        </div>
        <div className="fw-bolder">
          <p>Job Title</p>
          <h4>{jobTitle} </h4>
        </div>
        <div className="fw-bolder">
          <p>Email</p>
          <h4>{email} </h4>
        </div>
      </div>
    </div>
  );
};
