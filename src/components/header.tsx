import { HeaderStyles } from "./headerStyles";
import LogoBackground from "../assets/effect.svg"
import Logo from "../assets/terminal-solid 1.svg"

export function Header() {
    return (
        <>
            <HeaderStyles background_img={LogoBackground}>
                <div>
                    <img src={Logo} />
                    <span>Github Blog</span>
                </div>
            </HeaderStyles>
        </>
    );
}