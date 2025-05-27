import axios from 'axios';

const API_URL = 'http://localhost:3000/productos';

export const getProducts = () => axios.get(API_URL);
export const createProduct = (product) => axios.post(API_URL, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
export const updateProduct = (id, product) => axios.put(`${API_URL}/${id}`, product);
