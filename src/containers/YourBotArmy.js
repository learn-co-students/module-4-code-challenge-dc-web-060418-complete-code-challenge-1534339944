import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <h2>Your Bot Army</h2>
          <div className="row bot-army-row">
            {this.props.userBots.map(bot => {
              return <BotCard bot={bot} handleClick={this.props.handleClick} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
