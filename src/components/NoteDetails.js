import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css';
import './editnote.css';

const NoteDetails = () => {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const navigate = useNavigate();

  const fetchNote = async () => {
    try {
      const response = await axios.get(`https://kzmgtzuajh.execute-api.us-east-1.amazonaws.com/prod/notes/${id}`);
      setNote(response.data);
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    try {

      await axios.delete(`https://kzmgtzuajh.execute-api.us-east-1.amazonaws.com/prod/notes/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Note Details</h2>
      <div className="card">
        <div className="card-body">
          <strong>Subject:</strong> {note.subject}
        </div>
        <div className="card-body">
          <strong>Details:</strong> {note.details}
        </div>
      </div>
      <div className="button-container">
        <button className="btn-danger" onClick={handleDelete}>Delete</button>
        <button className="btn-secondary" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default NoteDetails;
