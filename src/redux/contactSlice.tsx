import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { contactSliceProps } from "../type/Type";

var initialState= {
  contacts: [],
};

export const contactsFetch = createAsyncThunk(
  "conatcts/contactsFetch",
  async (type) => {
    const res = await axios.get("https://dummyjson.com/users");
    return res;
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  // extraReducers:{
  //   [contactsFetch.pending]:(state)=>{
  //       // state.error:''
  //   }
  //   []
  // }
});

export default contactSlice.reducer;
