import React from "react";
import { ScoreboardContainer, Divider } from "../../styles";

/**
 * Scoreboard that will be displayed on the header
 */

const Scoreboard = ({ score, bestScore, round }) => {
    return (
        <ScoreboardContainer>
            <div>Current score: {score}</div>
            <Divider />
            <div>Best score: {bestScore}</div>
            <Divider />
            <div>Current round: {round}</div>
        </ScoreboardContainer>
    )    
}

export default Scoreboard