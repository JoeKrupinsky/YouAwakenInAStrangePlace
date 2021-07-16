import axios from 'axios'
let endpoint = "http://localhost:4001/api/end";
let endGame = () => {
    const config = {
        method: "PUT",
        url: endpoint,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config);
};
export {endGame}