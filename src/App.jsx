import React from "react";
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import './App.css';

import LivebenchChatbotWidget from "./components/LivebenchChatbotWidget";
import LivebenchChatbotBox from "./components/LivebenchChatbotBox";

function App({product}) {
  const [showMessage, setShowMessage] = React.useState(false);
  const [chatData, setChatData] = React.useState([])

  const defaultState = {
    opacity: 0,
    scale: 0.2,
  };
  return (
    <AnimatePresence>
      {
        showMessage === false ?
          <LivebenchChatbotWidget onClick={() => setShowMessage(true)} />
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
            <LivebenchChatbotBox data={chatData} setData={setChatData} onClick={setShowMessage} product={product}/>
          </motion.div>

      }

    </AnimatePresence>
  );
}

export default App;
