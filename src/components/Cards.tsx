import { NavLink } from "react-router-dom";
import Styles from "../styles/Cards.module.scss";
import { TitleMiddle } from "./commom/generalItems";
import { useContext } from "react";
import { AppContext } from "../context/github";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { customRenderers } from "./customRenderers";

export function CardsContainer() {
    const { issues, searchList } = useContext(AppContext)!;
    const list = searchList?.incomplete_results
        ? searchList.items
        : issues?.items && issues.items.length > 0
        ? issues.items
        : [];

    return (
        <nav className={Styles.cardContainer}>
            { list.length > 0 ? (
                list.map((issue, index) => {
                    console.log(`issue ${index}:`, issue);
                    return (
                        <NavLink key={index} to={`/post/${issue.id}`} className={Styles.card}>
                            <div>
                                <TitleMiddle>
                                    {issue.title}
                                </TitleMiddle>
                                <span>
                                    {new Date(issue.created_at).toLocaleDateString()}
                                </span>
                            </div>
                            <p>
                                <ReactMarkdown
                                    children={issue.body}
                                    remarkPlugins={[remarkGfm]}
                                    components={customRenderers}
                                />
                            </p>
                        </NavLink>
                    );
                })
            ) : (
                <p>No issues found.</p>
            )}
        </nav>
    );
}
