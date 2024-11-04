// TODO: Create an interface for the Candidate objects returned by the API
// src/interfaces/Candidate.interface.tsx

export interface Candidate {
  login: string; // GitHub username, typically called "login" in the API
  name: string | null;
  location: string | null;
  avatar_url: string;
  email: string | null;
  html_url: string;
  company: string | null;
  bio: string | null; // Optional field if you want to include the bio as in the expected output
}