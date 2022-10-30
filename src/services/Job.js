import axios from "../lib/axios";

//job create function
export const createJob = async (jobContent) => {
  try {
    return (await axios.post("/api/jobs/add", jobContent)).data;
  } catch (err) {
    console.error(err);
  }
};

//job read function
export const readJob = async () => {
  try {
    return (await axios.get("/api/jobs/get/all-jobs")).data.data;
  } catch (err) {
    console.error(err);
  }
};

//job update function
export const updateJob = async (jobContent) => {
  try {
    return (await axios.put("/api/jobs/edit", jobContent)).data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteJob = async (jobContent) => {
  try {
    return await axios.delete(`/api/jobs/delete/${jobContent._id}`);
  } catch (err) {
    console.error(err);
  }
};

//job read by user id function
export const readJobByUserId = async ({ user_email }) => {
  try {
    return (await axios.get(`/api/jobs/get/${user_email}`)).data.data;
  } catch (err) {
    console.error(err);
  }
};
