import { PostHeader } from '../components/postHeader';
import MainDiv from '../styles/ProfileMaindiv.module.scss'

export function Post() {
    return (
        <>
            <div className={MainDiv.mainDiv}>
                <PostHeader/>
            </div>
        </>
    );
}