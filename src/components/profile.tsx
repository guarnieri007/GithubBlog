import { Link, TitleLarge } from "./commom/generalItems";
import { ProfileData, ProfileStyle } from "./profileStyles";
import GitHubIcon from "../assets/github-brands.svg";
import CompanyIcon from "../assets/building-solid.svg";
import FollowersIcon from "../assets/user-group-solid.svg";
import style from "../styles/ProfileMaindiv.module.scss";


export function Profile() {
    return (
        <ProfileStyle>
            <img className={style.profileImage} src="https://github.com/guarnieri007.png" />
            <ProfileData>
                <div>
                    <TitleLarge>
                        Felipe Guarnieri
                    </TitleLarge>
                    <Link href="#">Github</Link>
                </div>
                <div>
                    <p>
                        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                    </p>
                </div>
                <div>
                    <div className={style.buttonIcon}>
                        <img src={GitHubIcon} />
                        <span>guarnieri007</span>
                    </div>

                    <div className={style.buttonIcon}>
                        <img src={CompanyIcon} />
                        <span>AiMedica</span>
                    </div>

                    <div className={style.buttonIcon}>
                        <img src={FollowersIcon} />
                        <span>0 seguidores</span>
                    </div>
                </div>
            </ProfileData>
        </ProfileStyle>
    );
}