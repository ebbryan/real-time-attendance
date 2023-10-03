import { handleGetUsers } from "@/api/api";
import Layout from "@/components/adminUI/Layout";
import AddUserModal from "@/components/adminUI/tableUI/AddUserModal";
import UsersTable from "@/components/adminUI/tableUI/UsersTable";
import { Role } from "@/types/role.type";
import { User } from "@/types/user.type";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const index = () => {
  const [userData, setUserData] = useState<Array<User>>([]);
  const [roleData, setRoleData] = useState<Array<Role>>([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };


  useEffect(() => {
    handleGetUsers()
      .then((result) => {
        setUserData(result.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getRoles = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const result = await axios.get(`http://localhost:5000/roles`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setRoleData(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <Fragment>
      <Layout>
        <UsersTable userProp={userData} />
        <button
          onClick={handleOpen}
          className="border-1 border-b-2 border-black"
        >
          Add new user
        </button>
        {isVisible && (
          <AddUserModal onClose={handleClose} roleData={roleData} />
        )}
      </Layout>
    </Fragment>
  );
};

export default index;
