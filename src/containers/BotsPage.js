import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super();

    this.state = {
      botArmy: [],
      botRendered: null,
      botList: []
    };
  }

  fetchAllBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          botList: data
        });
      });
  };
  componentDidMount() {
    this.fetchAllBots();
  }

  handleAdd = bot => {
    !this.state.botArmy.includes(bot)
      ? this.setState({
          botArmy: [...this.state.botArmy, bot]
        })
      : null;
  };

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.botArmy} />
        <BotCollection bots={this.state.botList} handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default BotsPage;
