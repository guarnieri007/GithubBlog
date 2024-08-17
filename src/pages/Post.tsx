import { useParams } from 'react-router-dom';
import { PostHeader } from '../components/postHeader';
import MainDiv from '../styles/ProfileMaindiv.module.scss'
import { useContext } from 'react';
import { AppContext } from '../context/github';

export function Post() {
    const { id } = useParams<{ id: string }>();
    const { issues } = useContext(AppContext)!;
    const issue = issues?.items.find((c) => c.id.toString() === id);
    return (
        <>
            <div className={MainDiv.mainDiv}>
                {issue ? <PostHeader issue={issue} /> : <p>Issue not found</p>}
            </div>
        </>
    );
}