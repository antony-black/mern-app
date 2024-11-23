import { makeAutoObservable } from "mobx";
import axios from "axios";
import { API_URL } from "../http";
import AuthService from "../services/AuthService";

export default class Store {
  isAuth = false;
  isActivated = false;
  isRegistrated = false;
  user = null;
  isLoading = false;
  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(value) {
    this.isAuth = value;
  }

  setActivated(value) {
    this.isActivated = value;
  }

  setRegistrated(value) {
    this.isRegistrated = value;
  }

  setUser(user) {
    this.user = user;
  }

  setLoading(value) {
    this.isLoading = value;
  }

  setError(message) {
    this.error = message;
  }

  async registration(email, password) {
    try {
      const response = await AuthService.registration(email, password);
      console.log("registration/response >>>>", response);
      localStorage.setItem("token", response.data.accessToken);
      this.setRegistrated(true);
      this.setUser(response.data.user);
      this.setError('');
    } catch (error) {
      this.setError(error.response?.data?.message);
      console.error("Store/registration: ", error.response?.data?.message);
    }
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      console.log("login/response >>>>", response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      console.log('isActivated >>>>', response.data.user.isActivated);
      this.setActivated(response.data.user.isActivated);
      this.setUser(response.data.user);
    } catch (error) {
      console.error("Store/login: ", error.response?.data?.message);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      this.setAuth(false);
      this.setUser(null);
    } catch (error) {
      console.error("Store/logout: ", error.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log("checkAuth/response >>>>", response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      console.log('isActivated >>>>', response.data.isActivated);
      this.setActivated(response.data.user.isActivated);
      this.setUser(response.data.user);
    } catch (error) {
      console.error("Store/checkAuth: ",error.response?.data?.message);
      this.setAuth(false);
      this.setUser(null);
      localStorage.removeItem("token"); 
    } finally {
      this.setLoading(false);
    }
  }
}
