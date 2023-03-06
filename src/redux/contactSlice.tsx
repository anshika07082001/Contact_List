import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { contactSliceProps } from "../type/Type";

var initialState: contactSliceProps = {
  contacts: [],
  contactObj:{}
};

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
    contactObj:(state,action)=>{
        state.contactObj=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(contactsFetch.pending, (state, action) => {})
      .addCase(contactsFetch.fulfilled, (state, action) => {
        state.contacts = action.payload.data.users;
      })
      .addCase(contactsFetch.rejected, (state, action) => {});
  },
});

export const {contactObj}=contactSlice.actions

export default contactSlice.reducer;
