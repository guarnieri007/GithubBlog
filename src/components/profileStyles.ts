import styled from "styled-components";

export const ProfileStyle = styled.div`
padding: 32px;
width: 100%;
overflow: auto;

display: flex;
flex-direction: row;
align-content: center;
@media (max-width: 768px) {
    align-items: center;
    gap: 24px;
    flex-direction: column;
}
`;

export const ProfileData = styled.div`

display: flex;
flex-direction: column;
height: auto;
padding-left: 32px;
gap: 14px;

div:first-child {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: fit-content;
    
    h1 {
        flex-grow: 1;
    }
}
div:nth-child(2) {
    flex-grow: 1;
    margin-top: 8px;
    p{
        font-size: 16px;
        line-height: 160%;
        color: ${prop => prop.theme["base-text"]};

        display: -webkit-box;
        -webkit-line-clamp: 2; /* Número de linhas a serem exibidas */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

div:nth-child(3){
    display: flex;
    flex-direction: row;
    width:100%;
}

@media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-left: 16px;
    width: 100%;
    flex-wrap: wrap;
    div:nth-child(3) {
        align-items: center;
        flex-wrap: wrap;
        div {
            margin: 0 auto;
        }

    }

    div:nth-child(2) {

    p{
        -webkit-line-clamp: 4; /* Número de linhas a serem exibidas */
    }
}
    
}

`;