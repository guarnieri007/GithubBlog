import { Link, TitleLarge } from "./commom/generalItems";
import { ProfileData, ProfileStyle } from "./profileStyles";
import GitHubIcon from "../assets/github-brands.svg";
import CompanyIcon from "../assets/building-solid.svg";
import FollowersIcon from "../assets/user-group-solid.svg";
import style from "../styles/ProfileMaindiv.module.scss";
import { useContext } from "react";
import { AppContext } from "../context/github";


export function Profile() {
    const { userData } = useContext(AppContext)!;

    if (!userData) {
        return <div>Loading...</div>;
    }
    return (
        <ProfileStyle>
            <img className={style.profileImage} src={userData.avatar_url} />
            <ProfileData>
                <div>
                    <TitleLarge>
                        {userData.name}
                    </TitleLarge>
                    <Link href={userData.html_url}>Github</Link>
                </div>
                <div>
                    <p>
                        {userData.bio}
                    </p>
                </div>
                <div>
                    <div className={style.buttonIcon}>
                        <img src={GitHubIcon} />
                        <span>{userData.login}</span>
                    </div>

                    {userData.company && (
                        <div className={style.buttonIcon}>
                            <img src={CompanyIcon} />
                            <span>{userData.company}</span>
                        </div>
                    )}

                    <div className={style.buttonIcon}>
                        <img src={FollowersIcon} />
                        <span>{userData.followers} seguidores</span>
                    </div>
                </div>
            </ProfileData>
        </ProfileStyle>
    );
}