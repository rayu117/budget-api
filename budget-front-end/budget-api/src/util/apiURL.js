export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3004"
      : "herokuapp.com";
  };