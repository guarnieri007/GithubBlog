import { useContext, useState } from "react";
import styles from "../styles/SearchBar.module.scss";
import { TextSmall, TitleSmall } from "./commom/generalItems";
import { AppContext } from "../context/github";

export function SearchBar() {
    const { issues, setSearchList } = useContext(AppContext)!;
    const [searchingItem, setSearchingItem] = useState("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const searchQuery = event.target.value.toLowerCase();
        setSearchingItem(searchQuery);

        if (searchQuery.length > 0 && issues?.items) {
            // Filtra os itens de acordo com o title ou body
            const searchResult = issues.items.filter((issue) => 
                issue.title.toLowerCase().includes(searchQuery) || 
                issue.body?.toLowerCase().includes(searchQuery)
            );

            const newList = {
                total_count: searchResult.length,
                incomplete_results: true,
                items: searchResult
            }

            // Atualiza a lista de busca com os resultados
            setSearchList(newList);
        } else {
            // Limpa a lista de busca se a query for muito curta
            setSearchList(null);
        }
    }

    return (
        <div className={styles.searchBarContainer}>
            <div>
                <TitleSmall>Publicações</TitleSmall>
                <TextSmall>{issues?.total_count != null ? issues.total_count : 0} publicações</TextSmall>
            </div>
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Buscar conteúdo"
                value={searchingItem}
                onChange={handleInputChange}
            />
        </div>
    );
}
