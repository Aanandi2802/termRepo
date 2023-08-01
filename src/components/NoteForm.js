import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NoteForm = () => {
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://kzmgtzuajh.execute-api.us-east-1.amazonaws.com/prod/notes/', { subject, details });
      navigate('/');
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a New Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject:</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        <div>
          <label>Details:</label>
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} required />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NoteForm;
