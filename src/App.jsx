import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import NextPage from "./NextPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route exact path="/next-page" element={<NextPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
