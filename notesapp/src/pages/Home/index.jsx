import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";

export const Home = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col w-[300px] h-[70px] border border-red-500 relative">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border"
            placeholder="Enter the Title"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border"
            placeholder="Enter the Text"
          />
          <button className="absolute bottom-0 right-0">
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </main>
    </>
  );
};
