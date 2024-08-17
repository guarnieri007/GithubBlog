import { useContext } from "react";
import styles from "../styles/SearchBar.module.scss";
import { TextSmall, TitleSmall } from "./commom/generalItems";
import { AppContext } from "../context/github";

export function SearchBar() {
    const {issues} = useContext(AppContext)!

    return(
        <div className={styles.searchBarContainer}>
            <div>
                <TitleSmall>Publicações</TitleSmall>
                <TextSmall>{issues?.total_count != null ? issues.total_count : 0} publicações</TextSmall>
            </div>
            <input  className={styles.searchInput} type="text" name="" id="" placeholder="Buscar conteúdo" />
        </div>
    );
}