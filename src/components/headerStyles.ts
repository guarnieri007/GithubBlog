import styled, { css } from "styled-components";

interface HeaderStylesProps {
    background_img: string,
}

const BaseBackground = css`
bottom: 38px;
width: 35%;
height: 188px;
background-repeat: repeat-y;
background-size: cover;
pointer-events: none;
margin-top: 5rem;
`;


export const HeaderStyles = styled.div<HeaderStylesProps>`
width: 100%;
height:auto;
min-height: 296px;
display: flex;
flex-direction: row;
box-shadow: inset 0px 0px 170px 100px rgba(28, 46, 65, 60%);
background-color: ${prop => prop.theme["base-profile"]};


&::before, &::after {
    ${BaseBackground}
    content: "";
    background-image: url(${prop => prop.background_img});
}

&::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

div:first-child {
    flex-grow: 1;
    align-self: center;
    top: 35%;
    left: 0;
    right: 0;
    text-align: center;
    width: auto;
    height: auto;
    min-width: 45px;
    min-width: 98px;
    translate: 0 -50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: ${prop => prop.theme.blue};

    img {
        min-width: 35px;
        height: 35px;
        width: auto;
    }
    span {
        font-size: 24px;
        line-height: 160%;
    }
}

`;