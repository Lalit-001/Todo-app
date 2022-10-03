import React, { useState } from "react";

const Header = ({ titleList, doneTaskList, setDoneTaskList }) => {
  const handleCheckbox = (e) => {
    const idNo = e.target.getAttribute("value");
    const doneTask = titleList.splice(idNo, 1);
    setDoneTaskList([...doneTaskList, doneTask]);
  };

  return (
    <div>
      <div className="space-y-4 my-4">
        <h1 className="text-xl font-semibold ">Things to do </h1>
        {titleList.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input
                type="checkbox"
                value={item}
                id={index}
                onChange={handleCheckbox}
              />
              <h1>{item}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
