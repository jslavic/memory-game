import styled from "styled-components";

/**
 * Proivdes style for the div when the user chooses theme
 * and start the game
 */

const GameStart = styled.div`
    display: flex;
    flex-direction: column;
    margin: 80px auto;
    text-align: center;
    font-size: 24px;
    gap: 10px;
`;

const Choices = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export { GameStart, Choices }