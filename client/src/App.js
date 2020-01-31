import React, { Component } from "react";

import Thumbnail from './components/Thumbnail'
import Score from './components/Score'

class App extends Component {

  state = {
    tiles: [
    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Beth_Smith.png",
    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Eyepatchevilmorty.jpg",
    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Jerry_Smith.png",
    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Jessica.png",

    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Meeseeks.png",
    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Morty.png",
    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/mr_poopybutthole.png",
    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Mr._Goldenfold.png",

    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Rick.png",
    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Talkingcat.png",
    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Tammy_and_Bird_Person.png",
    "https://raw.githubusercontent.com/sjarango/ClickyGame/2c23822c17bcaabca79c2c7ff916e9a1a5d4dd1c/client/images/Tammy.png"
    ],
    score: 0,
    topScore: 0
  };

  clickedTiles = [];

  // empty clickedTiles Array
  // deploy to heroku img links?
  // shuffle array on mount
  // store images locally
  
  handleTitleClick = (evt) => {

    console.log(evt);
    const clickedTile = evt.target.src;


    if (this.clickedTiles.includes(clickedTile)) {
      this.clickedTiles.length = 0;
      this.setState({ score: 0 });
      return;
    }

    const newScore = this.state.score + 1;
    const topScore = newScore > this.state.topScore ?
      newScore :
      this.state.topScore;

    this.clickedTiles.push(clickedTile);

    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());
    this.setState({
      tiles: shuffled,
      score: newScore,
      topScore: topScore
    });

  }

  // const newShuffle = this.state.tiles.sort(() => 0.5 - Math.random());

  render() {
    return (
      <div className="App">
        <Score score={this.state.score} topScore={this.state.topScore} />
        {this.state.tiles.map((tile, idx) => <Thumbnail
          src={tile} key={idx} onClick={this.handleTitleClick}
        />)}

      </div>
    );
  }
}

export default App;
