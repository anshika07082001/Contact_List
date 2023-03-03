import { Input, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { contactsProps } from "../type/Type";

const ContactComp = (props: contactsProps) => {
  return (
    <div className="conatctLists">
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        placeholder="Search"
      />
    </div>
  );
};

export default ContactComp;
