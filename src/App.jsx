import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NewClients from "./pages/NewClients";
import UpdateClient from "./pages/UpdateClient";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewClients />} />
          <Route path="edit/:id" element={<UpdateClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
