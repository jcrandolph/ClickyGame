import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from './components/Wrapper';
import Header from "./components/Header";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards
  }


render() {
  return (
    <Wrapper>
      <Header></Header>
      {this.state.cards.map(card => (
        <GameCard
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