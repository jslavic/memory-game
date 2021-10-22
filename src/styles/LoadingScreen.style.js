import styled from "styled-components";
import { keyframes } from "styled-components";

/**
 * Provides styling for the loading screen
 */

const LoadingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    font-size: 32px;
    gap: 20px;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const webkitspin = keyframes`
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
`;

const Loader = styled.div`
    border: 5px solid #ffcdb2;
    border-radius: 50%;
    border-top: 5px solid black;
    width: 80px;
    height: 80px;
    -webkit-animation: ${webkitspin} 1s linear infinite; /* Safari */
    animation: ${spin} 1s linear infinite;
`;

export { LoadingDiv, Loader }