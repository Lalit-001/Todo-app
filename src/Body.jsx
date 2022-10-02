import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import AddTodo from "./AddTodo";
import Header from "./Header";
import TaskDone from "./TaskDone";

const Body = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [titleList, setTitleList] = useState([]);
  console.log(title, titleList);

  return (
    <div>
      {/* ----------------------todo--------------- */}
      <Header titleList={titleList} />
      {show ? (
        /* -----------------------form------------------------ */
        <AddTodo
          show={show}
          setShow={setShow}
          setTitle={setTitle}
          setTitleList={setTitleList}
          title={title}
          titleList={titleList}
        />
      ) : (
        /* ------------button--------------*/
        <div className="space-y-8 ">
          <div>
            <div className="relative flex items-center ">
              <GrFormAdd className="absolute ml-2 text-2xl " />
              <button
                onClick={() => setShow(true)}
                className="py-1 pl-8 pr-4 font-semibold text-white bg-yellow-500 rounded-2xl hover:bg-yellow-600"
              >
                Add a todo
              </button>
            </div>
          </div>
        </div>
      )}
      {/* // -----------------taskdone--------------- */}

      <TaskDone />
    </div>
  );
};

export default Body;
