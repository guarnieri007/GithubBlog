
import MainDiv from '../styles/ProfileMaindiv.module.scss'
import { Profile } from '../components/profile'
import { SearchBar } from '../components/SearchBar'
import { CardsContainer } from '../components/Cards'

export function InitialPage() {

    return (

        <>
            <div className={MainDiv.mainDiv}>
                <Profile />
            </div>
            <SearchBar />
            <CardsContainer />
        </>

    )
}