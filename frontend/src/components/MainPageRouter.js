import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "routes/main_page/Home";
import Login from "routes/main_page/Login";
import Register from "routes/main_page/Register";

function MainPageRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users/showregister" element={<Register />} />
        <Route path="/users/showlogin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default MainPageRouter;
