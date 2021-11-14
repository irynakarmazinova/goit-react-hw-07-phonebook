import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6187f432057b9b00177f9b5a.mockapi.io/api/v1";
// axios.defaults.baseURL = "https://localhost:3001";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    // try {
    //    const { data } = await axios.post("/contacts", contact);
    //    return data;
    // } catch (error) {
    //    return error.message;
    // }
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);

// mockapi
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const {
      data: { id },
    } = await axios.delete(`/contacts/${contactId}`);

    return id;
  }
);

// json
// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId) => {
//     await axios.delete(`/contacts/${contactId}`);
//     return contactId;
//   }
// );

// ---------------------
// https://www.npmjs.com/package/json-server
// npm i json-server
// создать файл db.json
// json-server --port 3001 --delay 250 --watch db.json
// можно добавить в scripts 'api-server':'json-server --port 3001 --delay 250 --watch db.json' и после что бы запустить сервер npm run api-server
