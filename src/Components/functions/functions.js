import axios from "axios";

const baseURL =
  "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1";

export const getShibe = () => {
  return axios.get(`${baseURL}`).then(({ data }) => {
    return data;
  });
};
