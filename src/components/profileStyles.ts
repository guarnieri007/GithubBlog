import styled from "styled-components";

export const ProfileStyle = styled.div`
padding: 32px;
width: 100%;

display: flex;
flex-direction: row;
`;

export const ProfileData = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
height: auto;
padding-left: 32px;

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
        color: ${prop => prop.theme["base-text"]}
    }
}

div:nth-child(3){
    display: flex;
    flex-direction: row;
    width:100%;
}
`