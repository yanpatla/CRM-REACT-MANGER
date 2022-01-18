import React, { useEffect, useState } from "react";
import axios from "axios";
import Clients from "../components/Clients";

const Home = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      try {
        const url = "http://localhost:4000/clients";
        const res = await axios.get(url);
        setClients(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClients();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900"> Clients</h1>

      <p className="mt-3">Manage your Clients</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Company</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <Clients key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
