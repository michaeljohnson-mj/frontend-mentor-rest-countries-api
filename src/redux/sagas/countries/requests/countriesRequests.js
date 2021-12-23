// import { request } from "../../../../services/ApiService";

// export function getCountries() {
//     console.log("Request")
//   return request("get", "all");
// }

import axios from "axios";

export function getCountries() {
  return axios.request({
    method: "get",
    url: "https://restcountries.com/v2/all",
  });
}

