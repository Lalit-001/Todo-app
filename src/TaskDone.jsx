import React from "react";

const TaskDone = ({
  doneTaskList,
  setTitle,
  setTitleList,
  titleList,
  title,
}) => {
  const handleRemoveFromDone = (e) => {
    const idNo = e.target.getAttribute("id");
    const task = doneTaskList.splice(idNo, 1);

    setTitleList([...titleList, task]);
  };

  return (
    <div>
      <div className="my-6">
        <h1 className="text-xl font-semibold ">Things done</h1>

        {doneTaskList.length > 0 &&
          doneTaskList.map((item, index) => {
            return (
              <div className="flex gap-2" key={index}>
                <input
                  type="checkbox"
                  checked
                  onChange={handleRemoveFromDone}
                  id={index}
                />
                <span>{item}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TaskDone;
