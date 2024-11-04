// src/components/TestToken.tsx
import React from 'react';

const TestToken: React.FC = () => {
  const tokenAvailable = Boolean(import.meta.env.VITE_GITHUB_TOKEN);

  return (
    <div>
      <h2>GitHub Token Status: {tokenAvailable ? "Token is set" : "Token is missing"}</h2>
    </div>
  );
};

export default TestToken;