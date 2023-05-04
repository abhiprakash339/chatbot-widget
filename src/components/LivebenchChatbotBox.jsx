import React from "react";
import { Close, Send } from '@mui/icons-material';
import AnimateBotMessage from "./AnimateBotMessage";
import { getChatResponse } from "../api/api";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

const LivebenchChatbotBox = ({ data, setData, onClick, product }) => {

    const [message, setMessage] = React.useState('')
    const [loader, setLoader] = React.useState(false)
    const inputRef = React.useRef()
    const messageRef = React.useRef()
    const animateMessageRef = React.useRef()
  
    React.useEffect(() => {
      setTimeout(() => {
        messageRef.current.scrollIntoView({ behavior: 'smooth' })
      }, 100);
    }, [data, loader])
  
    const getBotResponse = async () => {
      const userMessag = inputRef.current.value
      setMessage(() => "")
      setData((prev) => [...prev, { type: 'user', message: userMessag }])
      setLoader(true)
      const msg = await getChatResponse(userMessag, product)
      animateMessageRef.current.innerHTML = ''
      for await (let i of msg.split(" ")) {
        animateMessageRef.current.innerHTML += i + " "; 
        await new Promise(r => setTimeout(r, 100));
        messageRef.current.scrollIntoView({ behavior: 'smooth' })
      }
      setLoader(false)
      setData((prev) => [...prev, { type: 'bot', message: msg }])
  
    }
  
    const allMessage = React.useMemo(() => {
      return data.map((item, index) => item.type === 'user' ? <UserMessage key={index} message={item.message} /> : <BotMessage key={index} message={item.message} />)
    }, [data])
  
    const handler = (event) => {
      if (event.key === 'Enter') getBotResponse()
    };

    return (
        <div className="livebench-chatbot-widget-box-container"  >
            <div className="livebench-chatbot-widget-box-header">
                <span>Virtual FAE</span>
                <button onClick={() => onClick(false)}><Close /></button>
            </div>
            <div className="livebench-chatbot-widget-box-message">
                {allMessage}
                {loader ? <AnimateBotMessage ref={animateMessageRef}/> : ""}
                <div ref={messageRef} />
            </div>
            <div className="livebench-chatbot-widget-box-input">
                <textarea onKeyUp={(e) => handler(e)} placeholder="ask anything..." ref={inputRef} value={message} onChange={(e) => setMessage(e.target.value)} wrap="hard"></textarea>
                <button onClick={() => getBotResponse()} disabled={loader}><Send /></button>
            </div>
        </div>
    )
}

export default LivebenchChatbotBox;
