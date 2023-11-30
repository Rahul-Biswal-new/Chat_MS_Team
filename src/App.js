// import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import MyMessage from './components/MyMessage';

function App() {
  return (
    <div>
      <ChatEngine
          height="100vh"
          projectID="99daef57-20b1-4d20-87f0-888f4166dff3"
          userName="rahulbiswal"
          userSecret="1234"
          renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    </div>
  );
}

export default App;
