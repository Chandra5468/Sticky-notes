import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "21/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my Second note",
      date: "26/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my Third note",
      date: "28/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: "30/04/2022",
    },
  ]);

  const [searchText, setSearchText] = useState('')

  const [darkMode,setDarkMode] = useState(false)

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if(savedNotes){
      setNotes(savedNotes);
    }

  },[])

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  },[notes])

  const addNote = (text) => {
    console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NotesList 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote} />
    </div>
    </div>
    
  );
}

export default App;
