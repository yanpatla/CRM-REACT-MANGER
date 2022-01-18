import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Forms = () => {
  const navigate = useNavigate();
  const clientSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "The name must be more than 3 charcteres")
      .max(20, "The name must be less than 20 charcteres")
      .required("The Client's Name is Required"),
    company: Yup.string().required("The Name's Company is Required"),
    email: Yup.string().email().required("The E-mail is Required"),
    phone: Yup.number().integer("No Valid Number").positive("No Valid Number"),
    notes: Yup.string(),
  });
  const handleSubmit = async (values) => {
    try {
      const url = "http://localhost:4000/clients";
      await axios.post(url, values);

      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-500 font-bold text-xl uppercase text-center">
        Add Client
      </h1>
      <Formik
        initialValues={{
          name: "",
          company: "",
          email: "",
          phone: "",
          notes: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={clientSchema}
      >
        {({ errors, touched }) => {
          //   console.log(touched);
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800">Name:</label>
                <Field
                  type="text"
                  id="name"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client Name"
                  name="name"
                />
                {errors.name && touched.name ? (
                  <Alert>{errors.name}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800">Company:</label>
                <Field
                  type="text"
                  id="company"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client's Company"
                  name="company"
                />
                {errors.company && touched.company ? (
                  <Alert>{errors.company}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800">E-mail:</label>
                <Field
                  type="email"
                  id="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client's E-mail"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800">Phone:</label>
                <Field
                  type="tel"
                  id="phone"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client's Phone"
                  name="phone"
                />
                {errors.phone && touched.phone ? (
                  <Alert>{errors.phone}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800">Notes:</label>
                <Field
                  as="textarea"
                  type="text"
                  id="notes"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="Client's Notes"
                  name="notes"
                />
              </div>

              <input
                type="submit"
                value="Add Client"
                className="mt-5 w-full  bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Forms;
