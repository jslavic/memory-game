import { useState } from "react";

/**
 * Custom react hook responsible for setting the score and the best score of the game
 */

const useScore = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const updateScore = (points) => {
        setScore((prevScore) => {
            const currentScore = prevScore + points;
            if (currentScore > bestScore) setBestScore(currentScore);
            return currentScore;
        })
    }

    const resetScore = () => {
        setScore(0);
    }

    return [score, bestScore, updateScore, resetScore];
}

export default useScore