import { Box } from "@mui/system";
import React, { useEffect } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { stateProps } from "../type/Type";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { contactObj, delContact } from "../redux/contactSlice";
import { Button, Typography } from "@mui/material";

const ContactCard = () => {
  const useAppSelector: TypedUseSelectorHook<stateProps> = useSelector;
  var state = useAppSelector((state) => state.contactSlice);
  var dispatch = useDispatch();
  let { userId } = useParams();

  useEffect(() => {
    if (userId !== undefined) {
      if (state.contacts.length > 0) {
        const id = (ele: any) => ele.id === userId;
        var index = state.contacts.findIndex(id);
        dispatch(contactObj(index));
      }
    }
  }, [userId]);
  var navigate = useNavigate();

  const deleteContact = () => {
    state.contacts.map((item: any, index: number) => {
      if (item.id === state.contactObj.id) {
        dispatch(delContact({ index: index }));
      }
    });
    navigate("/");
  };

  return (
    <>
      {Object.keys(state.contactObj).length > 0 ? (
        <Box
          display="flex"
          flexDirection="row"
          maxHeight="300px"
          minWidth="200px"
          paddingLeft="500px"
        >
          <img
            src={state.contactObj.image}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Box display="flex" flexDirection="row" alignItems="center">
              <h2>
                {state.contactObj.firstName} {state.contactObj.lastName}
              </h2>
              <StarBorderIcon />
            </Box>
            <h2>{state.contactObj.maidenName}</h2>
            <p>{state.contactObj.email}</p>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/contactlists/${state.contactObj.id}/edit`}>
                <Button sx={{ color: "blueviolet", border: "1px solid grey" }}>
                  Edit
                </Button>
              </Link>
              <Button
                sx={{ color: "red", border: "1px solid grey" }}
                onClick={deleteContact}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography variant="h5" paddingLeft="500px">
          No Data Found
        </Typography>
      )}
    </>
  );
};

export default ContactCard;
