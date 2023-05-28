import { UserDetails } from "../../Components/UserDetailss/UserDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserList } from "../../Components/UserList/UserList";

export const User = () => {
  const [users, setUsers] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        " https://602e7c2c4410730017c50b9d.mockapi.io/users "
      );
      setLoading(false);
      setUsers(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError("Error fetching data. Please try again later.");
    }
  };
  const handleItemClick = (selectedItem) => {
    setSelectedData(selectedItem);
  };

  return (
    <div className="container mt-5">
      <div className="row gap-4 ">
        <div className="col-lg-6 order-2 order-lg-0 col-12 justify-content-center">
          <UserList
            error={error}
            loading={loading}
            data={users}
            onItemClick={handleItemClick}
          />
        </div>

        <div className="col-lg-5 order-1 justify-content-center position-relative">
          <UserDetails selectedData={selectedData} />
        </div>
      </div>
    </div>
  );
};
