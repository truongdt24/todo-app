import axios from "axios";
// API addressc
const API_URL = "http://localhost:8080/todos";

export const getTodos = () => {
    return axios.get(API_URL);
};
export const addTodo = (todo) => {
    return axios.post(API_URL, todo);
};
export const updateTodo = (id, todo) => {
    return axios.put(`${API_URL}/${id}`,todo);
};
export const deleteTodo = (id) => {
    return axios.delete(`${API_URL}/${id}`);
}