import React from "react";
import BotIcon from "./BotIcon";
const AnimateBotMessage = React.forwardRef((props, ref) => {
    return (
        <div style={{ width: "100%", margin: "5px 0", display: 'flex', alignItems: 'flex-end' }}>
            <BotIcon />
            <div ref={ref} className="livebench-chatbot-widget-bot-message" >
                <div className="livebench-chatbot-widget-bouncing-loader" style={{ display: "flex" }}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>

    );
});
export default AnimateBotMessage