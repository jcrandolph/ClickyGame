import React, { Component } from "react";
import GameCard from "./components/GameCard/GameCard";
import Wrapper from './Wrapper/Wrapper';
import Header from "./components/Header/Header";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0,
    clickedIds: []
  };

  playGame = id => {
    let clickedIds = this.state.clickedIds;

    if (clickedIds.includes(id)) {
      this.setState({ clickedIds: [], score: 0 });
      alert("YOU LOSE! TRY AGAIN!")
      return;
    }

    else {
      clickedIds.push(id);

      if (clickedIds.length === 12) {
        this.setState({ score: 12, clickedIds: [] });
        alert("YOU WIN!");
        return;
      };


      this.setState({ cards, clickedIds, score: clickedIds.length });
      console.log("score: " + this.state.score);
      console.log("top score: " + this.state.topScore);

      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score });
        return;
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score}
          topScore={this.state.topScore} />

        {this.state.cards.map(card => (
          <GameCard
            playGame={this.playGame}
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
          />
        ))}

      </Wrapper>
    );
  }
}
export default App;