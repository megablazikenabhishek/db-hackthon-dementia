import React from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import ChatBotInput from "../../components/chatBotInput/chatBotInput";
import ChatDisplay from "../../components/chatDisplay/chatDisplay";
import { useState } from "react";

function ChatBotPage() {
  const [chatsList, setChatsList] = useState([{ message: "Hii, How are you?", type: "sender" },
    { message: "Hello, I am fine!", type: "receiver" },]);

  const pushChat = (message, type) => {
    setChatsList([...chatsList, { message: message, type: type }])
  };

  return (
    <>
      <PageHeader title={"Chat"}/>
      <ChatDisplay chatsList={chatsList}/>
      <ChatBotInput pushChat={pushChat}/>
    </>
  );
}

export default ChatBotPage;
