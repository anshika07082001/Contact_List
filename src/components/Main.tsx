import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { contactsFetch } from "../redux/contactSlice";
import ContactCard from "./ContactCard";
import ContactLists from "./ContactLists";
import EditContact from "./EditContact";

const Main = () => {
  var dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(contactsFetch());
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ContactLists />,
      children: [
        {
          path: "contactlists/:userId",
          element: <ContactCard />,
        },
        {
          path: "contactlists/:userId/edit",
          element: <EditContact />,
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
};

export default Main;
