import axios from "axios";

export interface GetUserDataProps {
    username: string;
}

export interface searchGitHubIssuesProps {
    username: string;
    text: string;
    repo: string;
}

export interface UserDataResponse {
    login: string;
    id: number;
//    node_id: string;
    avatar_url: string;
//    gravatar_id: string;
//    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
//    site_admin: boolean;
    name: string | null;
    company: string | null;
//    blog: string;
//    location: string | null;
//    email: string | null;
//    hireable: boolean | null;
    bio: string | null;
//    twitter_username: string | null;
    public_repos: number;
//    public_gists: number;
    followers: number;
    following: number;
//    created_at: string;
//    updated_at: string;
}


export interface GitHubIssueResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GitHubIssue[];
}

export interface GitHubIssue {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    user: GitHubUser;
    labels: [];
    state: string;
    locked: boolean;
    assignee: GitHubUser | null;
    assignees: GitHubUser[];
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    author_association: string;
    active_lock_reason: string | null;
    body: string;
    reactions: GitHubReactions;
    timeline_url: string;
    state_reason: string | null;
    score: number;
}

export interface GitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface GitHubReactions {
    url: string;
    total_count: number;
    "+1": number;
    "-1": number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
}



export const getUserData = async ({username}: GetUserDataProps):Promise<UserDataResponse | null> => {
    try {
        const responseData = await axios.get<UserDataResponse>(`https://api.github.com/users/${username}`, {
        });
        return responseData.data;
    }
    catch (error) {
        console.log("There was an error fetching the username.", error);
        return null;
    }
        
}

export const searchGitHubIssues = async ({text, username, repo}: searchGitHubIssuesProps):Promise<GitHubIssueResponse | null> => {
  try {
    const response = await axios.get<GitHubIssueResponse>(`https://api.github.com/search/issues`, {
      params: {
        q: `${text} repo:${username}/${repo}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the issues!', error);
    return null;
  }
};
