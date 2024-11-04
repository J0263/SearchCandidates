// src/pages/CandidateSearch.tsx
import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import './CandidateSearch.css';

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      console.log("Fetched candidate data:", data);

      // Map GithubUser[] to Candidate[]
      const mappedCandidates = data.map((user) => ({
        ...user,
        bio: user.bio || null, // Provide a default for bio
      }));

      setCandidates(mappedCandidates as Candidate[]);
    };
    fetchCandidates();
  }, []);

  const saveCandidate = () => {
    if (candidates.length === 0) return;

    const candidate = candidates[currentIndex];
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
    nextCandidate();
  };

  const nextCandidate = () => {
    if (candidates.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
    } else {
      console.warn("No more candidates available to display");
    }
  };

  if (candidates.length === 0) {
    return <p>Loading candidates...</p>;
  }

  const candidate = candidates[currentIndex];

  return (
    <section className="candidate-card">
      <img src={candidate.avatar_url} alt={candidate.name || candidate.login} className="avatar" />
      <h2 className="name">{candidate.name || candidate.login}</h2>
      <p className="location">Location: {candidate.location || 'Not available'}</p>
      <p className="email">Email: {candidate.email || 'Not available'}</p>
      <p className="company">Company: {candidate.company || 'Not available'}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
        GitHub Profile
      </a>
      <div className="actions">
        <button onClick={nextCandidate} className="reject-button">-</button>
        <button onClick={saveCandidate} className="save-button">+</button>
      </div>
    </section>
  );
};

export default CandidateSearch;