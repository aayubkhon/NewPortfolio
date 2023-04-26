import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import { navbar } from "../utils/nav";
export const Root = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ element, path, id }) => {
            return <Route element={element} path={path} key={id} />;
          })}
        </Route>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
