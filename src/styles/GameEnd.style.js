import styled from "styled-components";

/**
 * Proivdes style for the div when the game ends
 */

const GameEnd = styled.div`
    display: flex;
    flex-direction: column;
    margin: 80px auto;
    text-align: center;
    gap: 10px;
`;

const GameOverText = styled.div`
    color: #ff7070;
    font-weight: 900;
    font-size: 42px;
`;

export { GameEnd, GameOverText }