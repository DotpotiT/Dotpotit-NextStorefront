import axios from "axios";

axios.defaults.withCredentials = true;

export const fetchProducts = async () => {
  try {
    const response = await axios.get('/product.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};