import React from "react";
import { QuestionAnswer } from '@mui/icons-material';
function LivebenchChatbotWidget(props) {
    return (
        <div className="livebench-chatbot-widget-logo-container" onClick={() => props.onClick()}>
            <QuestionAnswer />
        </div>
    )
}

export default LivebenchChatbotWidget;