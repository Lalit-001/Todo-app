import React from "react";

const Header = ({ titleList }) => {
  return (
    <div>
      <div className="space-y-4 my-4">
        <h1 className="text-xl font-semibold ">Things to do </h1>
        {titleList.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Header;
