import useCards from "./useCards";
import useClickedCards from "./useClickedCards";
import useRounds from "./useRounds"
import useScore from "./useScore";
import { useState } from "react";

/**
 * Custom react hook that implements all previous hook
 * and creates all game logic
 */

const INITIAL_AMOUT = 4;
const CARDS_PER_ROUND = 2;
const MAX_CARDS = 12;

const useGame = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [isChoiceScreen, setIsChoiceScreen] = useState(true);
    const [theme, setTheme] = useState(null);
    const [
        cards, 
        getCards, 
        shuffleCards, 
        resetCards, 
        isLoading, 
        isCardsShowing, 
        setIsCardsShowing
    ] = useCards();
    const [
        isClicked,
        addToClicked,
        isAllClicked,
        resetClicked
    ] = useClickedCards();
    const [rounds, nextRound, resetRounds] = useRounds();
    const [score, bestScore, updateScore, resetScore] = useScore();

    // Handle card clicks
    const onCardClick = async (card) => {
        // Check and end game if the card was already clicked
        if (isClicked(card.id)) {
            setIsCardsShowing(false);
            setIsGameOver(true);
            return;
        }
        // Add card to clicked cards and update needed info
        addToClicked(card);
        updateScore(2);

        // Go to next round if all cards are clicked
        if (isAllClicked(cards.length)) {
            nextRound();
            resetClicked();
            resetCards();
            setIsCardsShowing(false);
            const card_amout = INITIAL_AMOUT + CARDS_PER_ROUND * rounds;
            await getCards(
                (card_amout < MAX_CARDS) ? card_amout : MAX_CARDS,
                 theme);
            return;
        }

        shuffleCards();
    }

    // Start a new game
    const startGame = async (choice) => {
        setTheme(choice)
        resetRounds();
        resetScore();
        resetClicked();
        resetCards();
        setIsChoiceScreen(false);
        await getCards(4, choice);
    }

    // Restart the initial game screen
    const playAgain = () => {
        setIsGameOver(false);
        resetScore();
        resetRounds();
        setIsChoiceScreen(true);
    }


    return [
        cards,
        isLoading,
        isCardsShowing,
        rounds,
        score,
        bestScore,
        isGameOver,
        isChoiceScreen,
        onCardClick,
        startGame,
        playAgain
    ]
}

export default useGame