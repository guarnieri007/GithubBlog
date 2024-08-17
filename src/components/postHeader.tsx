import { BackLink, Link, TitleLarge } from "./commom/generalItems";
import style from "../styles/postHeader.module.scss";
import iconsStyle from "../styles/ProfileMaindiv.module.scss";
import GitHubIcon from "../assets/github-brands.svg";
import CalendarIcon from "../assets/calendar-day-solid.svg";
import CommentIcon from "../assets/comment-solid.svg";
import { GitHubIssue } from "../utils/apiUtil";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { customRenderers } from "./customRenderers";

interface PostHeaderProps {
    issue: GitHubIssue;
}
export function PostHeader({ issue }: PostHeaderProps) {

    return (
        <div className={style.postMainContainer}>
            <div>
                <BackLink href="/">voltar</BackLink>
                <Link href={issue.html_url}>Ver no Github</Link>
            </div>
            <TitleLarge>{issue.title}</TitleLarge>
            <div className={style.iconsButtons}>
                <div className={iconsStyle.buttonIcon}>
                    <img src={GitHubIcon} />
                    <span>{issue.user.login}</span>
                </div>

                <div className={iconsStyle.buttonIcon}>
                    <img src={CalendarIcon} />
                    <span>{new Date(issue.created_at).toLocaleDateString()}</span>
                </div>

                <div className={iconsStyle.buttonIcon}>
                    <img src={CommentIcon} />
                    <span>{issue.comments} comentários</span>
                </div>
            </div>
            <ReactMarkdown
                children={issue.body}
                remarkPlugins={[remarkGfm]}
                components={customRenderers}
            />
        </div>
    );
}