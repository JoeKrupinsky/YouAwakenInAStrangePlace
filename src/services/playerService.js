import axios from "axios";

let add = (payload) => {
  const config = {
    method: "POST",
    url: "http://localhost:4001/players/add",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};
let getAll = () => {
  const config = {
    method: "GET",
    url: "http://localhost:4001/players/all",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let remove = (id, onSuccess, onError) => {
  const config = {
    method: "PUT",
    url: "http://localhost:4001/players/delete",
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let reset = () => {
  const config = {
    method: "PUT",
    url: "http://localhost:4001/players/reset",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { add, getAll, remove, reset }; // export all your calls here

// if you had three functions to export
// export { logIn, register, thirdFunction }
