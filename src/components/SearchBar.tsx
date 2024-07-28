import styles from "../styles/SearchBar.module.scss";
import { TextSmall, TitleSmall } from "./commom/generalItems";

export function SearchBar() {

    return(
        <div className={styles.searchBarContainer}>
            <div>
                <TitleSmall>Publicações</TitleSmall>
                <TextSmall>6 publicações</TextSmall>
            </div>
            <input  className={styles.searchInput} type="text" name="" id="" placeholder="Buscar conteúdo" />
        </div>
    );
}