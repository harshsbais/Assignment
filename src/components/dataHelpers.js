import axios from "axios"
import { API } from "../Endpoints";

export const getEmployees = async () => {
    const response = await axios.get(API._employee);
    return response;
}

export const addEmployee = async (body) => {
    const response = await axios.post(API._employee, body);
    return response.data;
}

export const deleteEmployee = async (uuid) => {
    if (!uuid) return;
    await axios.delete(API._employee + uuid + '/');
    console.log("Deleted", uuid)
}

export const getEmployee = async (uuid) => {
    const response = await axios.get(API._employee + uuid + '/');
    return response;
}

export const editEmployee = async (body, uuid) => {
    const response = await axios.patch(API._employee + uuid + '/', body);
    return response;
}