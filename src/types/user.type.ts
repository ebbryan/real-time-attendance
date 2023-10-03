export type User = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  username: string;
  password: string;
  role: {
    id: number;
    name: string;
  };
};
