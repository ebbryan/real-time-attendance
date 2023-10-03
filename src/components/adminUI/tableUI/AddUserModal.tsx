import { modalProps } from "@/props/modalProps.type";
import axios from "axios";
import React, { FunctionComponent, useState } from "react";

export const AddUserModal: FunctionComponent<modalProps> = ({
  onClose,
  roleData,
}) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const renderRoles = () => {
    return roleData.map((role) => {
      return (
        <option key={role.id} value={role.id}>
          {role.name}
        </option>
      );
    });
  };

  const handleAddUser = async () => {
    const accessToken = localStorage.getItem(`accessToken`);
    try {
      await axios.post(
        `http://localhost:5000/users`,
        {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          username: username,
          password: password,
          role: role,
          isActive: true,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      window.alert("Success !");
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[1000px]">
        <div className="bg-white p-3 rounded">
          <h1>Add New !</h1>
          <div className="flex flex-col">
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={(e) => {
                setMiddleName(e.target.value);
              }}
              type="text"
              placeholder="Middle Name"
            />
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="Username"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
            <select
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Select Role</option>
              {renderRoles()}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleAddUser}>Create</button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
