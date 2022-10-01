import React from "react";
import { Link } from "react-router-dom";

const AddTodo = () => {
  return (
    <form className="flex flex-col px-6 py-4 space-y-3 border border-gray-500 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold ">Create a todo</h2>
      <input
        type="text"
        placeholder="write an article about xState"
        className="px-4 py-2 border border-gray-400 rounded-md md:w-80 focus:outline-yellow-500 "
      ></input>
      <div className="flex gap-3">
        <button
          type="submit"
          className="px-4 py-1 font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
        >
          Save
        </button>
        <Link
          to="/"
          className="px-4 py-1 font-semibold border border-gray-400 rounded-md"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default AddTodo;