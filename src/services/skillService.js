import axios from "axios";
let endpoint = "http://localhost:4001/skills/";

let add = (payload) => {
  const config = {
    method: "POST",
    url: endpoint+"add",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};
let get = (payload) => {
    const config = {
      method: "POST",
      url: endpoint+"get",
      data:payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
  
    return axios(config);
  };
let getAll = () => {
  const config = {
    method: "GET",
    url: endpoint+"all",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let remove = (id, onSuccess, onError) => {
  const config = {
    method: "PUT",
    url: endpoint+"delete",
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let reset = () => {
  const config = {
    method: "PUT",
    url: endpoint+"reset",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};


export { add, get, getAll, remove, reset }; // export all your calls here

// if you had three functions to export
// export { logIn, register, thirdFunction }