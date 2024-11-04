// src/pages/ErrorPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <main aria-labelledby="error-title">
      <section>
        <h1 id="error-title">404: Page Not Found</h1>
        <h2>¯\\_(ツ)_/¯</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/">Go back to the homepage</Link>
      </section>
    </main>
  );
};

export default ErrorPage;