import React from "react";
import { GameStart, Choices, PlayButton } from "../../styles";

/**
 * Starting choice screen from which the game launches
 */

const ChoiceScreen = ({ isChoiceScreen, startGame }) => {
    const THEMES = ["Animals", "Sports", "Cars", "Games"]

    return (
        isChoiceScreen && (
            <GameStart>
                <div>Welcome to the memory game!</div>
                <div>Your goal is to select all of the cards without selecting the same one twice!</div>
                <div>Think you are up for the challange?</div>
                <div>All gifs provided by the giphy api</div>
                <div>Please select your theme to start the game</div>
                <Choices>
                    {THEMES.map((theme) => {
                        return <PlayButton key={theme} onClick={() => startGame(theme)}>
                            {theme}
                        </PlayButton>
                    })}
                </Choices>
            </GameStart>
        )
    )
}

export default ChoiceScreen