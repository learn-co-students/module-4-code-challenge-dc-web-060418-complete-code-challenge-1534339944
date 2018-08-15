import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  render() {
    let { handleAdd } = this.props;
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of Pokemon:{this.props.bots.map(bot => (
            <BotCard key={bot.id} bot={bot} handleAdd={handleAdd} />
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
