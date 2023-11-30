import React from 'react'
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';

const  ChatFeed = (props) => {
    // console.log(props, "props");
    const {chats, activeChat, userName, messages} = props;
    const chat = chats && chats[activeChat]
    // console.log(chat, userName, messages,"chat", "userName", "messages");

    const renderMessages = ()=>{
      const keys = Object.keys(messages);

      return keys.map((key,index)=> {
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[keys.index-1];
        const isMyMessage = userName === message.sender.username;
      })
    }



  return (
    <div key={`msg_${index}`} style={{width:'100%'}}>
        <div className="message-block">
          {isMyMessage 
            ? <MyMessage message={message}/> 
            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/> 
          }
        </div>
        <div className="read-receipts" style={{marginRight: isMyMessage? '18px' : '0px', marginLeft: isMyMessage? '0px' : '68px'}}>
        marginRight: isMyMessage? '18px' : '0px'
        </div>
    </div>
  )
        }


  if(!chat) return 'loading ...';


  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className="chat-title">{chat?.title} </div>
        <div className="chat-subtitle">
          {chat.people.map((person) =>`${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{height: '100px'}}>
        <div className='message-form-container'>
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    </div>
  )
};

export default ChatFeed