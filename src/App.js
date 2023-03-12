import React from "react";
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import './App.css';
import { Close, Send, QuestionAnswer } from '@mui/icons-material';
import { ReactComponent as BotLogo } from "./assets/bot_icon.svg"
const BouncingDotsLoader = (props) => {
  return (
    <div style={{ width: "100%", margin: "5px 0" }}>
      <div className="hover-widget-bot-message hover-widget-bouncing-loader" style={{ display: "flex" }}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

  );
};

const UserMessage = ({ message }) => {
  return (
    <div style={{ width: "100%", margin: "5px 0" }}>
      <span className="hover-widget-user-message">{message}</span>
    </div>
  )
}

const BotMessage = ({ message }) => {
  return (
    <div style={{ width: "100%", margin: "5px 0",display: 'flex',
    alignItems: 'flex-end'}}>
      <BotLogo className="hover-widget-bot-logo"/>
      <span className="hover-widget-bot-message">{message}</span>
    </div>
  )
}
function HoverWidget(props) {
  return (
    <div className="hover-widget-logo-container" onClick={() => props.onClick()}>
      <QuestionAnswer />
    </div>
  )
}
const HoverBox = (props) => {
  const [chatData, setChatData] = React.useState([])
  const [message, setMessage] = React.useState('')
  const [loader, setLoader] = React.useState(false)
  const inputRef = React.useRef()
  const messageRef = React.useRef()

  React.useEffect(() => {
    setTimeout(() => {
      messageRef.current.scrollIntoView({ behavior: 'smooth' })
    }, 100);

  }, [chatData, loader])

  const getBotResponse = () => {
    const userMessag = inputRef.current.value
    setMessage(() => "")
    setChatData((data) => [...data, { type: 'user', message: userMessag }])
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
      setChatData((data) => [...data, { type: 'bot', message: userMessag }])

    }, 5000);

  }

  const allMessage = React.useMemo(() => {
    return chatData.map((item, index) => item.type === 'user' ? <UserMessage key={index} message={item.message} /> : <BotMessage key={index} message={item.message} />)
  }, [chatData])


  return (
    <div className="hover-widget-box-container"  >
      <div className="hover-widget-box-header">
        <span>Hover</span>
        <button onClick={() => props.onClick(false)}><Close /></button>
      </div>
      <div className="hover-widget-box-message">
        {allMessage}
        {loader ? <BouncingDotsLoader /> : ""}
        <div ref={messageRef} />
      </div>
      <div className="hover-widget-box-input">
        <textarea placeholder="send messages..." ref={inputRef} value={message} onChange={(e) => setMessage(e.target.value)} wrap="hard"></textarea>
        <button onClick={() => getBotResponse()} disabled={loader}><Send /></button>
      </div>
    </div>
  )
}

function App() {
  const [showMessage, setShowMessage] = React.useState(false);
  const defaultState = {
    opacity: 0,
    scale: 0.2,
  };
  return (
    <AnimatePresence>
      {
        showMessage === false ?
          <HoverWidget onClick={() => setShowMessage(true)} />
          :
          <motion.div
            initial={defaultState}
            exit={defaultState}
            transition={{ duration: 0.5 }}
            animate={{
              boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.3)',
              scale: 1,
              opacity: 1
            }}
          >
            <HoverBox onClick={setShowMessage} />
          </motion.div>

      }

    </AnimatePresence>
  );
}

export default App;
