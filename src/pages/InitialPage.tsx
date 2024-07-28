import { Header } from '../components/header'
import MainDiv from '../styles/ProfileMaindiv.module.scss'
import { Profile } from '../components/profile'
import { InitialPageStyle } from './InitialPageStyle'
import { SearchBar } from '../components/SearchBar'

export function InitialPage() {

    return (
        <InitialPageStyle>
            <Header />
            <div className={MainDiv.mainDiv}>
                <Profile />
            </div>
            <SearchBar />
        </InitialPageStyle>
    )
}