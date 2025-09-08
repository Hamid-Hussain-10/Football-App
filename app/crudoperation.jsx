import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

const resource = "/posts";

// CREATE
export const createItems = async (data) => {
  try {
    const res = await axios.get(`${API_URL}${resource}`, data);
    return res.data;
  } catch (error) {
    console.log("Error creating item:", error.message);
    throw error;
  }
};

// READ (all items)
export const getItems = async () => {
  try {
    const res = await axios.get(`${API_URL}${resource}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching items:", error.message);
    throw error;
  }
};

// READ (single items) by id
export const getItem = async (id) => {
  try {
    const res = await axios.get(`${API_URL}${resource}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching item:", error.message);
    throw error;
  }
};

// UPDATE by id also data
export const updateItems = async (id, data) => {
  try {
    const res = await axios.put(`${API_URL}${resource}/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("Error updating item:", error.message);
    throw error;
  }
};

// DELETE by id
export const deleteItems = async (id) => {
    try {
     const res = await axios.delete(`${API_URL}${resource}/${id}`);
     return res.data
} catch (error) {
     console.error("Error deleting item:", error.message);
    throw error;
}}
