import React, { useState } from "react";
// import { GrIceCream } from "react-icons/gr";
// import { Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";
import Body from "./Body";
// import Header from "./Header";
// import Home from "./Home";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="h-screen px-4 py-6 space-y-3 md:space-y-6 md:px-12">
        <h1 className="text-3xl font-bold">Things to get Done</h1>

        <Body />
      </div>
    </div>
  );
};

export default App;
{
  /* <Routes>
          <Route index element={<Home />}></Route>
          <Route
            path="/AddTodo"
            element={<AddTodo updateTask={updateTask} />}
          ></Route>
        </Routes> */
}
// const [task, setTask] = useState([]);
// const updateTask = (e) => {
//   setTask(e);
// };
// console.log("task", task);
