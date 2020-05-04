import axios from "axios";

const baseURL =
  "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1";

const getShibe = () => {
  axios.get(`${baseURL}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export default getShibe;
