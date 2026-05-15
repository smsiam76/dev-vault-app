import api from "./api";

// get all task through email
export const getResources = async (email) => {
    const res = await api.get(`/resources?email=${email}`);
    return res.data;
}

// add task
export const addResource = async(resourceData) =>{
    const res = await api.post("/resources", resourceData);
    return res.data;
}