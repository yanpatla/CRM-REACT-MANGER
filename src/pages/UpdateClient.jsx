import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Forms from "../components/Form";
const UpdateClient = () => {
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
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Update Client</h1>

      <p className="mt-3">Fill the Inputs for Update the Client</p>

      <Forms client={client} loading={loading} />
    </>
  );
};

export default UpdateClient;
