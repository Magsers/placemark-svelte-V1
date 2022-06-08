import axios from "axios";
import {user} from "../stores.js"

// baseUrl = "http://localhost:4000";

export class PlacemarkService {
  baseUrl = "https://infinite-eyrie-16203.herokuapp.com";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    const placemarkCredentials = localStorage.placemark;
    if (placemarkCredentials) {
      const savedUser = JSON.parse(placemarkCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.placemark = JSON.stringify({email:email, token:response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("placemark");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async addRoute(route) {
    try {
      const response = await axios.post(this.baseUrl + "/api/crags/" + route.crag + "/routes", route);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async getCrags() {
    try {
      const response = await axios.get(this.baseUrl + "/api/crags");
      return response.data
    } catch (error) {
      return [];
    }
  }

  async getUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data
    } catch (error) {
      return [];
    }
  }

  async getCragById(_id) {
    try {
      const response = await axios.get(this.baseUrl + "/api/crags/" + _id);
      const crag = await response.data;
      return crag;
    } catch (error) {
      return [];
    }
  }

  async getRouteById(_id) {
    try {
      const response = await axios.get(this.baseUrl + "/api/routes/" + _id);
      const route = await response.data;
      return route;
    } catch (error) {
      return [];
    }
  }

  async getRoutes() {
    try {
      const response = await axios.get(this.baseUrl + "/api/routes");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getGrades() {
    try {
      const response = await axios.get(this.baseUrl + "/api/grades");
      return response.data
    } catch (error) {
      return [];
    }
  }

 
}