import React, { useState } from "react";

import Body from "./Body";

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
