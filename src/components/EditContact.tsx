import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editContact, updateContact } from "../redux/contactSlice";
import { stateProps } from "../type/Type";

const EditContact = () => {
  const useAppSelector: TypedUseSelectorHook<stateProps> = useSelector;
  var state = useAppSelector((state) => state.contactSlice);
  var dispatch = useDispatch();
  var navigate = useNavigate();
  var { userId } = useParams();
  // states for form fields
  var [firstname, setFirstName] = useState("");
  var [lastname, setLastName] = useState("");
  var [email, setEmail] = useState("");

  // function runs on the dependency of userId and dispatches the editContact function
  useEffect(() => {
    if (userId !== undefined) {
      if (state.contacts.length > 0) {
        const id = (ele: any) => ele.id == userId;
        var index = state.contacts.findIndex(id);
        dispatch(editContact(index));
      }
    }
    setFunc();
  }, [userId]);
  // function sets the initial states of the input fields
  const setFunc = () => {
    if (Object.keys(state.contactObj).length > 0) {
      setFirstName(state.contactObj.firstName);
      setLastName(state.contactObj.lastName);
      setEmail(state.contactObj.email);
    } else {
      navigate("/");
    }
  };
  // on changehandler for nput fields
  const changeHandler = (
    label: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (label === "FirstName") {
      setFirstName(e.currentTarget.value);
    }
    if (label === "LastName") {
      setLastName(e.currentTarget.value);
    }
    if (label === "Email") {
      setEmail(e.currentTarget.value);
    }
  };
  // btn click function for update and dispatches the updateContact function
  const upadte = () => {
    const id = (ele: any) => ele.id == state.contactObj.id;
    var index = state.contacts.findIndex(id);
    dispatch(
      updateContact({
        firstname: firstname,
        lastname: lastname,
        email: email,
        index: index,
      })
    );
    navigate(`/contactlists/${userId}`);
  };

  return (
    <>
      {/* condtion checks for obj is empty or not */}
      {Object.keys(state.contactObj).length > 0 ? (
        <Box
          minWidth="400px"
          marginLeft="500px"
          marginTop="20px"
          padding='20px'
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
          <Typography variant="h4">Edit Contact</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
            <TextField
              variant="outlined"
              id="outlined-basic"
              label="FirstName"
              value={firstname}
              onChange={(e) => changeHandler("FirstName", e)}
            />
            <TextField
              variant="outlined"
              id="outlined-basic"
              label="LastName"
              value={lastname}
              onChange={(e) => changeHandler("LastName", e)}
            />
            <TextField
              variant="outlined"
              id="outlined-basic"
              label="Email"
              value={email}
              onChange={(e) => changeHandler("Email", e)}
            />
            <Button variant="contained" onClick={upadte}>
              Update
            </Button>
          </Box>
        </Box>
      ) : (
        <h2>No data found</h2>
      )}
    </>
  );
};

export default EditContact;
