import axios from "axios";

export const handleGetUsers = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const result = await axios.get(`http://localhost:5000/users`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return result;
};
