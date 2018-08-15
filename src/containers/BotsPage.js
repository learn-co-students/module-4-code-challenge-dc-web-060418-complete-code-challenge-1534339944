import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    allBots: [],
    userBots: []
  };

  componentDidMount() {
    fetch(` https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(response => response.json())
      .then(jsonData =>
        this.setState({
          allBots: jsonData
        })
      );
  }

  addBotToUserList = bot => {
    if (!this.state.userBots.includes(bot)) {
      let myBots = [...this.state.userBots, bot];
      this.setState({
        userBots: myBots
      });
    }
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
        <BotCollection
          bots={this.state.allBots}
          userBots={this.state.userBots}
          handleClick={this.addBotToUserList}
        />
      </div>
    );
  }
}

export default BotsPage;
