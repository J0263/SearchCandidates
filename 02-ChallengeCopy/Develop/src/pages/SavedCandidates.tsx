// src/pages/SavedCandidates.tsx
import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import './SavedCandidates.css';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Fetch and validate data from localStorage
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]') as Candidate[];
    setSavedCandidates(candidates);
  }, []);

  if (savedCandidates.length === 0) {
    return <p>No candidates have been saved.</p>;
  }

  return (
    <section className="saved-candidates">
      <h1>Saved Candidates</h1>
      <ul className="candidate-list">
        {savedCandidates.map((candidate) => (
          <li key={candidate.login} className="candidate-item">
            <img
              src={candidate.avatar_url}
              alt={`${candidate.name || candidate.login}'s avatar`}
              className="avatar"
            />
            <h2>{candidate.name || candidate.login}</h2>
            <p>Location: {candidate.location || 'Not available'}</p>
            <p>Email: {candidate.email || 'Not available'}</p>
            <p>Company: {candidate.company || 'Not available'}</p>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
              GitHub Profile
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SavedCandidates;