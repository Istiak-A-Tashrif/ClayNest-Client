mport { useContext } from "react";
import { firebaseContext } from "../../AuthProvier/AuthProvider";

const useAuth = () => {
  const all = useContext(firebaseContext);
  return all;
};

export default useAuth;
