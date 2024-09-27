const axios = window.axios;
const url =
  "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

// Asynchronous function to create a new user
export const createUser = async (id, color, size, name, animal) => {
  try {
    const response = await axios({
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
    });
    console.log("POST response: ", response); // Log the response from the server
  } catch (err) {
    console.error("POST error: ", err); // Handle and log any errors
  }
};

// Asynchronous function to get all users
export const getAllUsers = async () => {
  try {
    const response = await axios.get("./servs/users.json"); // Fetch users from local JSON file
    console.log(response.data); // Log the fetched data
    return response.data; // Return the user data
  } catch (err) {
    console.error("GET Error: ", err); // Handle and log any errors
  }
};
