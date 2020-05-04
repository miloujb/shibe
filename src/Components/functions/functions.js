import axios from "axios";

const baseURL = "http://shibe.online/api/shibes";

export const getShibe = () => {
  axios.get(`${baseURL}`).then((res) => console.log(res));
};
