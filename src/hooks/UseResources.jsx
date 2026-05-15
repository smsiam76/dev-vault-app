import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { getResources } from "../api/resourcesApi";

const UseResources = () => {
  // get the user email from auth
  const { user } = useAuth();
  const userEmail = user?.email;

  //create a state for storing data
  const [resources, setResources] = useState([]);

  // create a state for loader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);

        // call getResources Api for set resources data
        const data = await getResources(userEmail);
        setResources(data);

        console.log(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        // after set resources data then set loading to false
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchResources();
    }
  }, [userEmail]);

  return { resources, setResources, loading };
};

export default UseResources;
