import React from "react";
import Scoreboard from "./Scoreboard"
import Title from "./Title";
import { HeaderContainer } from "../styles";

/**
 * Header container that provides the title together with the scores and round
 */

const Header = ({ score, bestScore, round }) => {
    return (
        <HeaderContainer>
            <Title />
            <Scoreboard 
            score = {score}
            bestScore = {bestScore}
            round = {round}
            />
        </HeaderContainer>
    )
}

export default Header
