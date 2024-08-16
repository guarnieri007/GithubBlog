import { NavLink } from "react-router-dom";
import Styles from "../styles/Cards.module.scss";
import { TitleMiddle } from "./commom/generalItems";
import { useContext } from "react";
import { AppContext } from "../context/github";

export function CardsContainer() {
    const { issues } = useContext(AppContext)!;

    return (
        <nav className={Styles.cardContainer}>
            {issues?.items && issues.items.length > 0 ? (
                issues.items.map((issue, index) => {
                    return (
                        <NavLink key={index} to="/post" className={Styles.card}>
                            <div>
                                <TitleMiddle>
                                    {issue.title}
                                </TitleMiddle>
                                <span>
                                    {new Date(issue.created_at).toLocaleDateString()}
                                </span>
                            </div>
                            <p>
                                {issue.body}
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
