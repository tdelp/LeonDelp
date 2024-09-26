const axios = window.axios;
const url =
  "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

export const createUser = (id, color, size, name, animal) => {
  return axios({
    method: "post",
    url: `${url}/users`,
    data: {
      id,
      color,
      size,
      name,
      animal,
    },
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};

export const getAllUsers = () => {
  return (
    axios
      // .get(`${url}/users`)
      .get("./servs/users.json")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log("GET Error: ", err);
      })
  );
};
