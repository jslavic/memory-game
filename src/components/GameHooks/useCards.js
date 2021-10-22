import { useState } from "react";
import useFetch from "./useFetch";

/**
 * Custom react hook responsible for using the useFetch hook
 * Cards represents an array of objects that contain gif URL, gif title and
 * unique id used to identify and display cards
 */

const URL = "https://api.giphy.com/v1/gifs/translate?api_key=L3PXxpHYqNAIKC6lJ6HP66s1A14bRtni&s="

const useCards = () => {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isCardsShowing, setIsCardsShowing] = useState(false);
    const getData = useFetch();

    const getCards = async (amout, searchKeyword) => {
        // Fetch gif object data to fill cards array to amout needed
        toggleLoading();
        for (let i = 0; i < amout; i++) {
            const gifObject = await getData(URL, searchKeyword, i);
            setCards((prevCards) => {
                // Check for duplicates
                // and set i to cards length in order to fill array with non-duplicates
                i = prevCards.length - 1
                if (prevCards.find((card) => card.title === gifObject.title)) {
                    return [...prevCards]
                }
                return [...prevCards, gifObject]
            });
        }
        setIsCardsShowing(true);
        toggleLoading();
    }

    const shuffleCards = () => {
        setCards((prevCards) => {
            const cards = [...prevCards];
            for (let i = cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]];
            }
            return cards
        })
    }

    const resetCards = () => {
        setCards([]);
    }

    const toggleLoading = () => {
        // Toggle isLoading between true and false
        setIsLoading((prevLoading) => prevLoading === false);
    }

    return [
        cards,
        getCards,
        shuffleCards,
        resetCards,
        isLoading,
        isCardsShowing,
        setIsCardsShowing
    ]
}

export default useCards