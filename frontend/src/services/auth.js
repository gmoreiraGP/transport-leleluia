import api from "./api";

const isLogged = () => localStorage.getItem("token");
const login = data => {
  api
    .post("/auth", data)
    .then(res => {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      api.defaults.headers.Authorization = `Bearer ${JSON.stringify(
        res.data.token
      )}`;
    })
    .catch(error => console.log("Erro de login", error));
};

const logout = () => localStorage.clear;

export { isLogged, login, logout };
