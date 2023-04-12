import React from "react";

const UserMessage = ({ message }) => {
    return (
        <div style={{ width: "100%", margin: "5px 0" }}>
            <span className="livebench-chatbot-widget-user-message">{message}</span>
        </div>
    )
}

export default UserMessage;