import React from "react";
import { GrFormAdd } from "react-icons/gr";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-8 ">
      <Link to="/AddTodo">
        <div className="relative flex items-center ">
          <GrFormAdd className="absolute ml-2 text-2xl " />
          <button className="py-1 pl-8 pr-4 font-semibold text-white bg-yellow-500 rounded-2xl hover:bg-yellow-600">
            Add a todo
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
