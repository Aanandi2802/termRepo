import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './note.css';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('https://kzmgtzuajh.execute-api.us-east-1.amazonaws.com/prod/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Notes List</h2>
      <div className="row">
        {notes.map((note) => (
          <div className="col-md-4 mb-4" key={note.noteId}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{note.subject}</h5>
                <p className="card-text">{note.details}</p>
                <Link to={`/notes/${note.noteId}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
