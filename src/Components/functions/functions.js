import axios from "axios";

const baseURL =
  "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1";

const getShibe = () => {
  axios.get(`${baseURL}`).then(({ data }) => {
    let shibeImg = data[0];
    console.log(data[0]);
    return shibeImg;
  });
};

export default getShibe;
