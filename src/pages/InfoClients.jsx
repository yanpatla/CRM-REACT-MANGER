import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const InfoClients = () => {
  const [client, setClient] = useState({});

  const [loading, setloading] = useState(true);
  console.log(loading);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const getClientByID = async () => {
      try {
        const url = `http://localhost:4000/clients/${id}`;
        const res = await axios.get(url);
        setClient(res.data);
      } catch (error) {
        console.log(error);
      }
      setloading(!loading);
    };
    getClientByID();
  }, []);

  return loading ? (
    <Spinner />
  ) : Object.keys(client).length === 0 ? (
    <p>There no Result </p>
  ) : (
    <div className="">
      <>
        <h1 className="font-black text-4xl text-blue-900">
          Info Client : {client.name}
        </h1>

        <p className="mt-3">Client's Information</p>
        <p className="text-2xl text-gray-600 mt-10">
          <span className="text-gray-800 uppercase font-bold">Client: </span>
          {client.name}
        </p>
        <p className="text-2xl mt-4 text-gray-600">
          <span className="text-gray-800 uppercase font-bold">E-mail: </span>
          {client.email}
        </p>

        {client.phone && (
          <p className="text-2xl mt-4 text-gray-600">
            <span className="text-gray-800 uppercase font-bold">Phone: </span>
            {client.phone}
          </p>
        )}
        {client.company && (
          <p className="text-2xl mt-4 text-gray-600">
            <span className="text-gray-800 uppercase font-bold">Company: </span>
            {client.company}
          </p>
        )}
        {client.notes && (
          <p className="text-2xl mt-4 text-gray-600">
            <span className="text-gray-800 uppercase font-bold">Notes: </span>
            {client.notes}
          </p>
        )}
      </>
    </div>
  );
};

export default InfoClients;
