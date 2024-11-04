// src/api/API.tsx

// Define a TypeScript interface for the user data returned by the GitHub API
export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  company?: string;
  location?: string;
  email?: string | null;
}
// src/api/API.tsx
export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  company?: string;
  location?: string;
  email?: string | null;
  bio?: string | null; // Add bio as an optional field
}
const searchGithub = async (): Promise<GithubUser[]> => {
  try {
    const start = Math.floor(Math.random() * 1000000) + 1; // Restrict the range for existing users
    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data: GithubUser[] = await response.json();
    if (!response.ok) {
      throw new Error('Invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    console.error('An error occurred while fetching user list:', err);
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<GithubUser | null> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data: GithubUser = await response.json();
    if (!response.ok) {
      throw new Error('Invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    console.error('An error occurred while fetching user data:', err);
    return null;
  }
};

export { searchGithub, searchGithubUser };