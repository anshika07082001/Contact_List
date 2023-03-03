import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactComp from "./ContactComp";

const Main = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.users);
        setContacts(res.users);
      });
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ContactComp contacts={contacts} />} />
      </Routes>
    </div>
  );
};

export default Main;
