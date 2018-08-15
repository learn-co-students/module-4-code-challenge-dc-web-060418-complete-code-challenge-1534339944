import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    allBots: [],

    userBots: [],
    specBot: null,
    showSpecs: false
  };

  componentDidMount() {
    fetch(` https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(response => response.json())
      .then(jsonData =>
        this.setState({
          allBots: jsonData,
          filteredBots: jsonData
        })
      );
  }

  addBotToUserList = bot => {
    if (!this.state.userBots.includes(bot)) {
      let myBots = [...this.state.userBots, bot];
      this.setState({
        userBots: myBots,
        specBot: null,
        showSpecs: false
      });
      // let filteredBots = [...this.state.allBots];
      // filteredBots.filter(bot => {
      //   return !this.state.userBots.includes(bot);
      // });
      // console.log(filteredBots);
      // this.setState({
      //   filteredBots: filteredBots
      // });
    }
  };

  getAvailableBots = () => {
    let filteredBots;
    filteredBots = this.state.allBots.filter(
      bot => !this.state.userBots.includes(bot)
    );

    return filteredBots;
  };

  displaySpecs = bot => {
    this.setState({
      specBot: bot,
      showSpecs: true
    });
  };

  hideSpecs = () => {
    this.setState({
      specBot: null,
      showSpecs: false
    });
  };

  handleRemoveClick = bot => {
    let myBots = [...this.state.userBots];
    let index = myBots.indexOf(bot);
    myBots.splice(index, 1);
    this.setState({
      userBots: myBots
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          userBots={this.state.userBots}
          handleClick={this.handleRemoveClick}
        />
        {this.state.specBot !== null ? (
          <BotSpecs
            bot={this.state.specBot}
            handleEnlistClick={this.addBotToUserList}
            handleGoBackClick={this.hideSpecs}
          />
        ) : null}

        {!this.state.showSpecs ? (
          <BotCollection
            bots={this.getAvailableBots()}
            userBots={this.state.userBots}
            handleClick={this.displaySpecs}
          />
        ) : null}
      </div>
    );
  }
}

export default BotsPage;
