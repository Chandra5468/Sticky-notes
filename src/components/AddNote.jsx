import React, { useState } from "react";

function AddNote({handleAddNote}) {


    const[noteText,setNoteText] = useState('')

    const characterLimit = 200;

    const handleChange = (event) =>{
        console.log(event.target.value)
        if(characterLimit-event.target.value.length >= 0){
            setNoteText(event.target.value)
        }  
        
    }

    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
        
    }

  return (
    <div className="note new">
      <textarea
        placeholder="Type to add a note..."
        cols="10"
        rows="8"
        value={noteText}
        onChange={handleChange}
        
        
      ></textarea>
      <div className="note-footer">
          <small>{characterLimit - noteText.length} remaining</small>
          <button className="save" onClick={handleSaveClick} >Save</button>
      </div>
    </div>
  );
}

export default AddNote;
