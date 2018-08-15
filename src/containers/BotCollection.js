import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          <h2>Collection of all bots</h2>
          <ul>
            {this.props.bots.map(bot => {
              return (
                <BotCard
                  bot={bot}
                  userBots={this.props.userBots}
                  handleClick={this.props.handleClick}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BotCollection;
