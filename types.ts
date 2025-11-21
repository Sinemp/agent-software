
export interface GithubAuthor {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GithubAsset {
  id: number;
  name: string;
  size: number;
  download_count: number;
  browser_download_url: string;
  updated_at: string;
}

export interface GithubRelease {
  id: number;
  tag_name: string;
  name: string;
  html_url: string;
  prerelease: boolean;
  published_at: string;
  body: string;
  assets: GithubAsset[];
  author: GithubAuthor;
}

export enum MirrorSource {
  GHPROXY = "GhProxy (推荐)",
  FASTGH = "FastGh",
  GHPS = "GhPs",
  GHSK = "gh.sk",
  GITHUB = "GitHub (官方)",
}

export const PROXY_MAP: Record<MirrorSource, (url: string) => string> = {
  [MirrorSource.GHPROXY]: (url) => `https://mirror.ghproxy.com/${url}`,
  [MirrorSource.FASTGH]: (url) => `https://fastgh.com/${url}`,
  [MirrorSource.GHPS]: (url) => `https://ghps.cc/${url}`,
  [MirrorSource.GHSK]: (url) => `https://gh.api.99988866.xyz/${url}`,
  [MirrorSource.GITHUB]: (url) => url,
};

