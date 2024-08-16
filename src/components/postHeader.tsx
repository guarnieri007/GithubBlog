import { BackLink, Link, TitleLarge } from "./commom/generalItems";
import style from "../styles/postHeader.module.scss";
import iconsStyle from "../styles/ProfileMaindiv.module.scss";
import GitHubIcon from "../assets/github-brands.svg";
import CalendarIcon from "../assets/calendar-day-solid.svg";
import CommentIcon from "../assets/comment-solid.svg";

export function PostHeader() {
    return (
        <div className={style.postMainContainer}>
            <div>
                <BackLink href="/">voltar</BackLink>
                <Link href="#">Ver no Github</Link>
            </div>
            <TitleLarge>JavaScript data types and data structures</TitleLarge>
            <div className={style.iconsButtons}>
                <div className={iconsStyle.buttonIcon}>
                    <img src={GitHubIcon} />
                    <span>guarnieri007</span>
                </div>

                <div className={iconsStyle.buttonIcon}>
                    <img src={CalendarIcon} />
                    <span>Há 1 dia</span>
                </div>

                <div className={iconsStyle.buttonIcon}>
                    <img src={CommentIcon} />
                    <span>5 comentários</span>
                </div>
            </div>
        </div>
    );
}