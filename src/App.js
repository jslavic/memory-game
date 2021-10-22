import useGame from "./components/GameHooks";
import { GlobalStyle } from "./styles";
import { Header, Footer } from "./components";
import LoadingScreen from "./components/LoadingScreen";
import ChoiceScreen from "./components/ChoiceScreen";
import GameEndScreen from "./components/GameEndScreen";
import CardsScreen from "./components/CardsScreen/CardsScreen";
import { ContainerWrapper } from "./styles";

function App() {

    const [
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
  ] = useGame();

  return (
    <div>
      <GlobalStyle />
      <ContainerWrapper>
        <Header score={score} bestScore={bestScore} round={rounds}/>
        <LoadingScreen isLoading={isLoading} />
        <CardsScreen cards={cards} onCardClick={onCardClick} isCardsShowing={isCardsShowing} />
        <ChoiceScreen isChoiceScreen={isChoiceScreen} startGame={startGame} />
        <GameEndScreen isGameOver={isGameOver} score={score} playAgain={playAgain} />
        <Footer />
      </ContainerWrapper>
    </div>
  );
}

export default App;
