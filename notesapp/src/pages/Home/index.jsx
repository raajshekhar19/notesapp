import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useReducer, useState } from "react";
import { notesReducer } from "../../reducers/notesreducer";

export const Home = () => {
  
  const initialState = {
    title : "",
    text : "",
    notes : []

  }
  const [{title,text,notes}, notesDispatch] = useReducer(notesReducer,initialState);

  const onTitleChange =(e)=>{
    notesDispatch({
      type : 'TITLE',
      payload : e.target.value
    })
  }

  const onTextChange =(e)=>{
    notesDispatch({
      type : 'TEXT',
      payload : e.target.value
    })
  }

  const onClickAdd = ()=>{
    notesDispatch({
      type : 'ADD_NOTE'
    })
    notesDispatch({
      type : 'CLEAR'
    })
      
  }


  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col w-[300px] h-[70px] border border-red-500 relative">
          <input
            value={title}
            onChange={onTitleChange}
            className="border"
            placeholder="Enter the Title"
          />
          <textarea
            value={text}
            onChange={onTextChange}
            className="border"
            placeholder="Enter the Text"
          />
          <button 
          disabled = {title.length ===0 }
          onClick={onClickAdd}
          className="absolute bottom-0 right-0">
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </main>
    </>
  );
};
