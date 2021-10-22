import React from "react";
import { GameEnd, GameOverText, PlayButton } from "../../styles";

/**
 * Screen when the game is over
 */

const GameEndScreen = ({ isGameOver, score, playAgain }) => {
    return (
        isGameOver && (
            <GameEnd>
                <GameOverText>Game over! Your score was {score}</GameOverText>
                <PlayButton onClick={playAgain}>Play Again</PlayButton>
            </GameEnd>
        )
    )
}

export default GameEndScreen