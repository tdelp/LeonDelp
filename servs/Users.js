const axios = window.axios; // Use axios for making HTTP requests
const url =
  "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

// Function to create a new user (pet) with given attributes
export const createUser = (id, color, size, name, animal) => {
  return axios({
    method: "post", // HTTP POST request to create new data
    url: `${url}/users`,
    data: {
      id,
      color,
      size,
      name,
      animal,
    },
    headers: {
      "Content-Type": "application/json", // Set content type as JSON
    },
    json: true,
  })
    .then((response) => {
      console.log("POST response: ", response); // Log successful POST response
    })
    .catch((err) => {
      console.log("POST error: ", err); // Log error if POST request fails
    });
};

// Function to fetch all users (pets) data
export const getAllUsers = () => {
  return (
    axios
      // .get(`${url}/users`) // Uncomment to use external API
      .get("./servs/users.json") // Use local JSON file instead for testing
      .then((response) => {
        console.log(response.data); // Log the data fetched from the server
        return response.data; // Return fetched user data
      })
      .catch((err) => {
        console.log("GET Error: ", err); // Log error if GET request fails
      })
  );
};
