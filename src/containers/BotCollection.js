import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <h2>Collection of All Bots</h2>

        <div className="row">
          {this.props.bots.map(bot => {
            return (
              <BotCard
                bot={bot}
                userBots={this.props.userBots}
                handleClick={this.props.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
