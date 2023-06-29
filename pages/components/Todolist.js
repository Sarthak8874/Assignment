import React, { useEffect, useState } from "react";
function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [filtertask, setFiltertask] = useState(tasks);
  const [newtask, setnewtask] = useState("");
  const [searchquery, setsearchquery] = useState("");
  
  useEffect(() => {
    setFiltertask(
      tasks.filter((task) => task.desc.toLowerCase().includes(searchquery))
    );
  }, [searchquery]);
  const handleinputchange = (e) => {
    setnewtask(e.target.value);
  };
  const handlesearchquery = (e) => {
    setsearchquery(e.target.value.toLowerCase());
  };
  const handeladdnewtask = () => {
    if(newtask !== ''){
      const addtotask = {
        id: Date.now(),
        desc: newtask,
        status: false,
      };
      setTasks([...tasks, addtotask]);
      setFiltertask([...filtertask, addtotask]);
      setnewtask("");
    }
  };
  const handlechangetaskstatus = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id == id
          ? { id: task.id, desc: task.desc, status: !task.status }
          : task;
      })
    );
    setFiltertask(
      filtertask.map((task) => {
        return task.id == id
          ? { id: task.id, desc: task.desc, status: !task.status }
          : task;
      })
    );
  };
  const handletaskdelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setFiltertask(filtertask.filter((task) => task.id !== id));
  };
  return (
    <div className="w-full flex-col flex justify-between items-center mt-10 mb-60">
      <div className="px-4 mt-4 mx-auto  mb-4">
        <h2 className="text-4xl font-bold">To-do List</h2>
      </div>
      <div className="flex flex-row justify-between">
        <input
          className="px-2 py-1 border border-gray-300 mr-2 w-full"
          type="text"
          placeholder="Enter a new task"
          value={newtask}
          onChange={handleinputchange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handeladdnewtask();
            }
          }}
        />
        <input
          className="px-2 py-1 border border-gray-300 w-full"
          type="text"
          placeholder="Search tasks"
          value={searchquery}
          onChange={handlesearchquery}
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-980 overflow-auto flex flex-col justify-center p-4">
          <table className="min-w-500 overflow-auto m-5 table-auto overflow-x-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Serial No</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {(searchquery === "" ? tasks : filtertask).map((task, index) => {
                return (
                  <tr
                    key={task.id}
                    className={`${task.status == true ? "bg-gray-100" : ""}`}
                  >
                    <td className="py-2 px-4 border text-center">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {task.desc}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        className={`${
                          task.status == true ? "bg-green-500" : "bg-red-500"
                        } text-white p-1 rounded`}
                        onClick={() => handlechangetaskstatus(task.id)}
                      >
                        {" "}
                        {task.status == true ? "Completed" : "Incompleted"}
                      </button>
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        className="bg-black text-white p-1 rounded"
                        onClick={() => handletaskdelete(task.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
