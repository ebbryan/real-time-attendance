import { userProps } from "@/props/userProps.type";
import React, { FunctionComponent } from "react";

export const UsersTable: FunctionComponent<userProps> = ({ userProp }) => {
  const renderRows = () => {
    return userProp.map((user) => {
      return (
        <tr>
          <td key={user.id}>{user.username}</td>
          <td>{user.role?.name}</td>
        </tr>
      );
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <td>username</td>
          <td>role</td>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default UsersTable;
