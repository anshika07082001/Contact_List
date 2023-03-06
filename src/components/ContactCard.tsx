import { Box } from "@mui/system";
import React, { useEffect } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { stateProps } from "../type/Type";
import { Link, useParams } from "react-router-dom";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { contactObj } from "../redux/contactSlice";
import { Button } from "@mui/material";

const ContactCard = () => {
  const useAppSelector: TypedUseSelectorHook<stateProps> = useSelector;
  var state = useAppSelector((state) => state.contactSlice);
  var dispatch = useDispatch();
  let { userId } = useParams();

  useEffect(() => {
    if (userId !== undefined) {
      dispatch(contactObj(state.contacts[Number(userId) - 1]));
    }
  }, [userId]);

  return (
    <>
      {state.contactObj.image !== undefined ? (
        <Box display="flex" flexDirection="row" maxHeight="300px">
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
            <p>How to webpage Test</p>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/contactlists/${state.contactObj.id}/edit`}>
                <Button sx={{ color: "blueviolet", border: "1px solid grey" }}>
                  Edit
                </Button>
              </Link>
              <Button sx={{ color: "red", border: "1px solid grey" }}>
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default ContactCard;
