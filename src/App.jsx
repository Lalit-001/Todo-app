import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <NavBar />

      <div className="h-screen px-4 py-6 space-y-3 md:space-y-6 md:px-12">
        <h1 className="text-3xl font-bold">Things to get Done</h1>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/AddTodo" element={<AddTodo />}></Route>
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;
