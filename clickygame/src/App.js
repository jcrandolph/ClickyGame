import React, { Component } from "react";
import GameCard from "./components/GameCard/GameCard";
import Wrapper from './Wrapper/Wrapper';
import Header from "./components/Header/Header";
import cards from "./cards.json";



class App extends Component {
  state = {
    cards,
    score:0,
    topScore:0,
    lastClickId:0
  };

  handleIncrement = () => {
        this.setState({ score: this.state.score + 1 });
  };

  handleTopScoreIncrement = () => {
        this.setState({ topScore: this.state.topScore + 1 });
  };

  shuffleArray = () => {
    for (let i = this.state.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.state.cards[i], this.state.cards[j]] = [this.state.cards[j], this.state.cards[i]];
    }
    console.log(this.state.friends[0].id);
    this.setState({ cards });
    
  }
 

  


render() {
  return (
    <Wrapper>
      <Header>
        score= {this.state.score}
        topScore= {this.state.topScore}
      </Header>
      
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