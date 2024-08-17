import { createContext, ReactNode, useState, useEffect } from 'react';
import { getUserData, searchGitHubIssues, UserDataResponse, GitHubIssueResponse } from '../utils/apiUtil';

interface AppProviderProps {
    children: ReactNode;
}

interface AppContextType {
    userData: UserDataResponse | null;
    issues: GitHubIssueResponse | null;
    searchList: GitHubIssueResponse | null;
    setSearchList: React.Dispatch<React.SetStateAction<GitHubIssueResponse | null>>;
    setIssues: React.Dispatch<React.SetStateAction<GitHubIssueResponse | null>>;
    setUserData: React.Dispatch<React.SetStateAction<UserDataResponse | null>>;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: AppProviderProps) => {
    const userName = "guarnieri007";
    const repoName = "GithubBlog"
    const [userData, setUserData] = useState<UserDataResponse | null>(null);
    const [issues, setIssues] = useState<GitHubIssueResponse | null>(null);
    const [searchList, setSearchList] = useState<GitHubIssueResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData({ username: userName });
            setUserData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await searchGitHubIssues({
                text:"",
                username: userName,
                repo: repoName
             });
            setIssues(data);
        };

        fetchData();
    }, []);

    return (
        <AppContext.Provider
            value={{
                userData,
                issues,
                searchList,
                setSearchList,
                setUserData,
                setIssues
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
