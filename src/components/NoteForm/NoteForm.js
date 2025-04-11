import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./NoteForm.css";
import { actions } from "../../redux/reducers/noteReducer";
import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";
// import { addNote } from "../../redux/actions/noteAction";

function NoteForm() {
  const dispatch = useDispatch()
  const [noteText, setNoteText] = useState("");
  const message = useSelector(notificationSelector)


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(noteText))
    setNoteText("");
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(resetNotification())

      }, 3000)
    }
  }, [dispatch, message])
  return (
    <div className="container">
      {message && <div className="alert alert-warning" role="alert">
        {message}
      </div>}
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">Create Note</button>
      </form>
    </div>
  );
}

export default NoteForm;
