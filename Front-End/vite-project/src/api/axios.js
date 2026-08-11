import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error, e.g., redirect to login page
       error.userMessage = "Your session has expired. Please log in again.";

      console.error("Unauthorized access - redirecting to login.");
      
        localStorage.removeItem("token");

        localStorage.removeItem("user");

        window.location.href="/LoginForm";
    }

    if (error.response?.status === 403) {
      error.userMessage = "You do not have permission to perform this action.";
    }

    if (error.response?.status === 404) {
      error.userMessage = "Requested resource not found.";
    }

    if (error.response?.status === 500) {
      error.userMessage = "Server error. Please try again later.";
    }

    if (!error.response) {
      error.userMessage =
          "Cannot connect to the server. Please check your internet connection.";
    }

    return Promise.reject(error);
  }
);

export default instance;