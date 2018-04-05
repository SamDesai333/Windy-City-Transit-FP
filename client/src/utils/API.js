import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function(obj) {
    return axios.post("/api/signin/signup", obj);
  },
  getUser: function(obj) {
      console.log("api obj", obj);
    return axios.post("/api/signin/user", obj);
  }

};
