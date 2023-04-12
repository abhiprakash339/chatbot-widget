import React from "react";
import BotIcon from "./BotIcon";

const BotMessage = ({ message }) => {
    return (
        <div style={{ width: "100%", margin: "5px 0", display: 'flex', alignItems: 'flex-end' }}>
            <BotIcon />
            <span className="livebench-chatbot-widget-bot-message">{message}</span>
        </div>
    )
}

export default BotMessage;
