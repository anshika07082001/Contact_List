import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { contactSliceProps } from "../type/Type";

// initial states of contactslice
var initialState: contactSliceProps = {
  contacts: [],
  contactObj: {},
  loading: false,
  error: "",
};

// function fetches the data from url
export const contactsFetch = createAsyncThunk(
  "conatcts/contactsFetch",
  async () => {
    const res = await axios.get("https://dummyjson.com/users");
    return res;
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // function sets the state of single contact object
    contactObj: (state, action) => {
      state.contactObj = state.contacts[action.payload];
    },
    // function sets the state for edit contact
    editContact: (state, action) => {
      state.contactObj = state.contacts[action.payload];
    },
    // function updates the contact
    updateContact: (state, action) => {
      state.contacts[action.payload.index].firstName = action.payload.firstname;
      state.contacts[action.payload.index].lastName = action.payload.lastname;
      state.contacts[action.payload.index].email = action.payload.email;
    },
    // function deletes the contact
    delContact: (state, action) => {
      state.contacts.splice(action.payload.index, 1);
      state.contactObj = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(contactsFetch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(contactsFetch.fulfilled, (state, action) => {
        state.contacts = action.payload.data.users;
      })
      .addCase(contactsFetch.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { contactObj, editContact, updateContact, delContact } =
  contactSlice.actions;

export default contactSlice.reducer;
