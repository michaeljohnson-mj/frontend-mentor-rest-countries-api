import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const apiRequest = (method, url, payload = null, headers = 1) => {
  let requestData = {
    method: method,
    url: baseUrl + url,
  };

  if (payload) {
    requestData.data = payload;
  }

  if (headers === 1) {
    requestData.headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
  }

  return axios(requestData);
};
