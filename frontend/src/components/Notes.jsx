import {useState, useEffect} from "react"
import axios from "axios"
import  List from "./List"

function Note() {

    const [notes , setNewNotes] = useState(null)


    useEffect(() => {
      getNotes()
        } ,[])

    function getNotes() {
      axios({
          method: "GET",
          url:"/backend/movies/",
        }).then((response)=>{
          const data = response.data
          setNewNotes(data)
        }).catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}

    return(
        <div>
            { notes && notes.map(note => <List
        key={note.id}
        id={note.id}
        name={note.name}
        genre={note.genre}
        starring={note.starring}
        />
        )}
        </div>
    )


}
export default Note;