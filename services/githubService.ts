import { GithubRelease } from '../types';

export const fetchReleases = async (owner: string, repo: string): Promise<GithubRelease[]> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`);
    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch releases", error);
    throw error;
  }
};