import { AxiosResponse } from "axios";
import API from "./AxiosInstances";

const handleSubmit = (
  email: string,
  password: string
): Promise<AxiosResponse> => {
  return API.post("/login", {
    email,
    password,
  });
};

export function isAuthorized(): boolean {
  return !!localStorage.getItem("token");
}
export default handleSubmit;
