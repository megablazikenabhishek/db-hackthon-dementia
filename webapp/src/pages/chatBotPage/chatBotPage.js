import React from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import ChatBotInput from "../../components/chatBotInput/chatBotInput";
import ChatDisplay from "../../components/chatDisplay/chatDisplay";

function ChatBotPage() {
  return (
    <>
      <PageHeader title={"Chat"}/>
      <ChatDisplay/>
      <ChatBotInput/>
    </>
  );
}

export default ChatBotPage;
