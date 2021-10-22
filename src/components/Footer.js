import React from "react";
import { FooterContainer, Logo } from "../styles";
import logo from "../assets/github-logo.png"

/**
 * Create footer with github link
 */

const Footer = () => {
    return (
        <FooterContainer>
            Copyright &copy; Josip Slavić
            <a
            href="https://github.com/jslavic"
            target="_blank" 
            rel="noreferrer">
                <Logo src={logo} alt="Github logo" />
            </a>
        </FooterContainer>
    )
}

export default Footer