
import Header from './commponent/header/header'
import Note from './commponent/note/note'
import notes from './notes/notes'
import CreatArea from './commponent/creatArea/creatArea'
import { useEffect, useState } from 'react'



function App() {

  const [noteList, setNoteList] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteList));
   }, [noteList]);

  function addNote(newNote) {
    setNoteList((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNoteList((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });
  }
  return (
    <div className='bg-gray-200 w-full h-full min-h-screen overflow-hidden'>
    <Header></Header>
    <CreatArea onAdd={addNote}></CreatArea>
    {noteList.map((noteItem) => (
      <Note 
      key={noteItem.id}
      id={noteItem.id}
      title={noteItem.title}
      content={noteItem.content}
      color={noteItem.color}
      onDelete={deleteNote}
      
      />
    ))}
    </div>
  )
}

export default App
