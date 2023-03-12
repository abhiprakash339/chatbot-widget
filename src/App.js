import React from "react";
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import './App.css';
import { Close, Send, QuestionAnswer } from '@mui/icons-material';

const Bot = (props) => {
  return(
    <>
    <svg className="hover-widget-bot-logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px"
        y="0px" viewBox="0 0 122.88 105.21" style={{enableBackground:"new 0 0 122.88 105.21"}} >
        <g>
          <path style={{fillRule:"evenodd",clipRule:"evenodd"}}
            d="M63.91,18.75v12.16h33.51c5.43,0,9.87,4.44,9.87,9.87v12.47h13.42c1.19,0,2.17,0.97,2.17,2.17v25.28 c0,1.19-0.97,2.17-2.17,2.17h-13.42v12.47c0,5.43-4.44,9.87-9.87,9.87h-73c-5.43,0-9.87-4.44-9.87-9.87V82.87H2.17 C0.97,82.87,0,81.9,0,80.71V55.42c0-1.19,0.97-2.17,2.17-2.17h12.38V40.79c0-5.43,4.44-9.87,9.87-9.87h33.51V18.75 c-3.85-1.26-6.62-4.87-6.62-9.14c0-5.31,4.3-9.61,9.61-9.61c5.31,0,9.61,4.3,9.61,9.61C70.53,13.88,67.75,17.49,63.91,18.75 L63.91,18.75z M41.03,79.74h40.81c1.99,0,3.62,1.63,3.62,3.62v1.7c0,1.99-1.63,3.62-3.62,3.62H41.03c-1.99,0-3.62-1.63-3.62-3.62 v-1.7C37.41,81.36,39.04,79.74,41.03,79.74L41.03,79.74z M78.7,47.59c5.37,0,9.73,4.35,9.73,9.73c0,5.37-4.35,9.72-9.73,9.72 s-9.72-4.35-9.72-9.72C68.97,51.94,73.33,47.59,78.7,47.59L78.7,47.59z M44.18,47.59c5.37,0,9.72,4.35,9.72,9.73 c0,5.37-4.35,9.72-9.72,9.72c-5.37,0-9.72-4.35-9.72-9.72C34.46,51.94,38.81,47.59,44.18,47.59L44.18,47.59z" />
        </g>
      </svg>
    </>
  )
}
const BouncingDotsLoader = (props) => {
  return (
    <div style={{ width: "100%", margin: "5px 0", display: 'flex', alignItems: 'flex-end' }}>
      <Bot />
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
    <div style={{ width: "100%", margin: "5px 0", display: 'flex', alignItems: 'flex-end' }}>
      <Bot />
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
