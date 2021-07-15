import axios from "axios";
let endpoint = "http://localhost:4001/api/players/";

let add = (payload) => {
  const config = {
    method: "POST",
    url: endpoint + "add",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then((res) => {
    return res.data.id;
  });
};
let addMulti = (payload) => {
  const config = {
    method: "POST",
    url: endpoint + "addMulti",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then((res) => {
    return res.data.id;
  });
};
let get = (payload) => {
  const config = {
    method: "POST",
    url: endpoint + "get",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};
let getAll = () => {
  const config = {
    method: "GET",
    url: endpoint + "all",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let remove = (payload, onSuccess, onError) => {
  const config = {
    method: "PUT",
    url: endpoint + "delete",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let reset = () => {
  const config = {
    method: "PUT",
    url: endpoint + "reset",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};
let update = (payload) => {
  const config = {
    method: "PUT",
    url: endpoint + "update",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { add, addMulti, get, getAll, remove, reset, update };
