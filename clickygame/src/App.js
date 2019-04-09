import React, { Component } from "react";
import GameCard from "./components/GameCard/GameCard";
import Wrapper from './Wrapper/Wrapper';
import Header from "./components/Header/Header";
import cards from "./cards.json";

//var Shuffle = require("react-shuffle")

class App extends Component {
  state = {
    cards
  };

 

  playGame = id => {
    const cards = this.state.cards.filter(card => card.id!== id);
    this.setState({cards})
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