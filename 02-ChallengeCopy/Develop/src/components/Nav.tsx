// src/components/Nav.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Candidate Search</Link>
        </li>
        <li>
          <Link to="/SavedCandidates">Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
// const Nav = () => {
//   // TODO: Add necessary code to display the navigation bar and link between the pages
//   return (
//     <div>Nav</div>
//   )
// };

// export default Nav;
