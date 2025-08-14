import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getDestinations = () => API.get("/destinations");
export const getDestinationById = (id) => API.get(`/destinations/${id}`);
export const createDestination = (data) => API.post("/destinations", data);
export const updateDestination = (id, data) => API.put(`/destinations/${id}`, data);
export const deleteDestination = (id) => API.delete(`/destinations/${id}`);
