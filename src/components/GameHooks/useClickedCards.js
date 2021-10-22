import { useState } from "react";

/**
 * Custom react hook responsible for handling clicked cards
 */

const useClickedCards = () => {
    const [clickedCards, setClickedCards] = useState([]);

    const isClicked = (id) => {
        // Check if the card has already been clicked
        return (clickedCards.find(card => card.id === id) ? true : false);
    }

    const addToClicked = (card) => {
        // Add card to clicked cards
        setClickedCards((prevCards) => [
            ...prevCards,
            card
        ])
    }

    const isAllClicked = (count) => {
        // Check if all cards are clicked
        // Count should be the lenght of the cards array
        return (clickedCards.length + 1) === count;
    }

    const resetClicked = () => {
        setClickedCards([]);
    }

    return [
        isClicked,
        addToClicked,
        isAllClicked,
        resetClicked
    ]
}

export default useClickedCards