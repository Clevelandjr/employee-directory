import axios from "axios";

export default {
  popEmployees: function() {
    return axios.get(
      "https://randomuser.me/api/?results=75"
    );
  }
};