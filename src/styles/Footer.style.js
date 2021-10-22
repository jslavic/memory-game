import styled from "styled-components";

/**
 * Provides github styled footer and logo style
 */

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    background-color: rgb(75, 70, 74);
    color: #fff;
    padding: 10px;
`;

const Logo = styled.img`
    margin-left: 10px;
    margin-bottom: -4px; /** push icon down too look better */
    width: 20px;
    height: auto;
`;

export { FooterContainer, Logo }