import React from "react";
import Forms from "../components/Form";
 

const NewClients = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>

      <p className="mt-3">Fill the Inputs for Register a new Client</p>

      <Forms/>
    </>
  );
};

export default NewClients;
