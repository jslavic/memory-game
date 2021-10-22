import React from "react";
import { StyledCard, CardImage, CardGrid } from "../../styles";

/**
 * Screen that actually displays the game
 */

const CardsScreen = ({ cards, onCardClick, isCardsShowing }) => {
    return (
        isCardsShowing && (
            <CardGrid>
                {cards.map((card) => {
                    return (
                        <StyledCard key={card.id} onClick={() => onCardClick(card)}>
                            <CardImage src={card.url} alt={card.title} />
                        </StyledCard>
                    )
                })}
            </CardGrid>
        )
    )
}

export default CardsScreen