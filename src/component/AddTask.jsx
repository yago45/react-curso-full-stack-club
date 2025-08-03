import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className=" space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col ">
      <input
        type="text"
        placeholder="digite o titulo da tarefa "
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md "
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="digite a descriçao da tarefa "
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md "
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descriçao da tarefa ");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2  rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
