/* eslint-disable react/prop-types */
import { Alert } from "react-bootstrap";
import LoadingSpinner from "../Spiner/LoadingSpinner";
import "./UserList.css";
import { toast } from "react-hot-toast";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
export const UserList = ({ data, onItemClick, error, loading }) => {
  const placeholderImage =
    "https://images.unsplash.com/photo-1492337034744-218795d77f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
  const handleImageError = (e) => {
    e.target.src = placeholderImage;
    setLoading(false);
  };

  if (loading) {
    return (
      <div
        style={{ cursor: "pointer" }}
        className=" w-100 d-flex flex-column gap-3"
      >
        <div className="UserList ">
          <h1>USER LIST</h1>{" "}
        </div>
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    toast.error(error, { duration: 8000 });
    return (
      <div
        style={{ cursor: "pointer" }}
        className=" w-100 d-flex flex-column gap-3"
      >
        <div className="UserList ">
          <h1>USER LIST</h1>{" "}
        </div>
        <Alert variant="danger">{error}</Alert>;
      </div>
    );
  }

  return (
    <div
      style={{ cursor: "pointer" }}
      className=" w-100 d-flex flex-column gap-3"
    >
      <div className="UserList ">
        <h1>USER LIST</h1>{" "}
      </div>

      {data?.map((item, idx) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [Loading, setLoading] = useState(true);
        return (
          <div onClick={() => onItemClick(item)} key={idx} className="listItem">
            <div>
              <img
                src={item.avatar ? item.avatar : placeholderImage}
                alt=" Profile Image"
                className="image"
                onError={handleImageError}
                onLoad={() => setLoading(false)}
              />
              {Loading && <p className="fw-bolder">loading</p>}
            </div>

            <h3 className="fw-bolder fs-2">
              {" "}
              {item?.profile?.firstName} {item?.profile?.lastName}{" "}
            </h3>
          </div>
        );
      })}
    </div>
  );
};
