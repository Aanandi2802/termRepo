import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteDetails from './components/NoteDetails';
import NoteForm from './components/NoteForm';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation bar container */}
        <div className="container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Note</Link>
          </nav>
        </div>
        
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/notes" element={<NoteList />} />
          <Route path="/create" element={<NoteForm />} />
          <Route path="/notes/:id" element={<NoteDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
