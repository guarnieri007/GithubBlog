import styled from "styled-components";
import LinkIcon from "../../assets/link.svg"

export const TitleLarge = styled.h1`
font-size: 24px;
font-weight: bold;
line-height: 130%;
color: ${prop => prop.theme["base-title"]};
`;

export const TitleSmall = styled.h2`
font-size: 18px;
font-weight: normal;
line-height: 160%;
color: ${prop => prop.theme["base-subtitle"]};
`;

export const TextSmall = styled.span`
font-size: 14px;
font-weight: bold;
line-height: 160%;
color: ${prop => prop.theme["base-span"]};
`;

export const Link = styled.a`
font-size: 12px;
color: ${prop => prop.theme.blue};
font-weight: bold;
line-height: 160%;
padding-right: 13px;
position: relative;

&::before {
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    right: -9px;
    top: 4px;
    bottom: 0px;
    background-image: url(${LinkIcon});
    background-size: contain;
    background-repeat: no-repeat;
}

&:hover::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px; /* Ajuste a altura conforme necessário */
    height: 1px;
    background-color: ${(props) => props.theme.blue};
    width: calc(100% + 10px);
}
`;