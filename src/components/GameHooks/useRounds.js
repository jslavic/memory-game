import { useState } from "react";

/**
 * Custom react hook responsible for setting rounds
 */

const useRounds = () => {
    const [rounds, setRounds] = useState(1);

    const nextRound = () => {
        setRounds((prevRound) => {
            return prevRound + 1;
        })
    }

    const resetRounds = () => {
        setRounds(1);
    }

    return [rounds, nextRound, resetRounds];
}

export default useRounds