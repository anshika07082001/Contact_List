import { Button, Input, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import { Link, Outlet } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { stateProps } from "../type/Type";

const ContactLists = () => {
  const useAppSelector: TypedUseSelectorHook<stateProps> = useSelector;
  var state = useAppSelector((state) => state.contactSlice);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          borderRight: "1px solid #d4d4d4",
          background: "#f7f7f7",
          position: "fixed",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            borderBlockEnd: "1px solid #d4d4d4",
          }}
        >
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            placeholder="Search"
          />
          <Box sx={{ padding: "5px" }}>
            <Button
              variant="contained"
              sx={{ background: "white", color: "blue" }}
            >
              New
            </Button>
          </Box>
        </Box>
        <Box sx={{ maxHeight: "90vh", overflowY: "scroll" }}>
          {state.contacts.map((item: any, i: number) => {
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px",
                }}
              >
                <Link to={`contactlists/${item.id}`}>{item.firstName} {item.lastName}</Link>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};

export default ContactLists;
