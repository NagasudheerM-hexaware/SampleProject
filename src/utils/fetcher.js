import axios from "axios";

const fetchUsers = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data;
  };

export default fetchUsers;      