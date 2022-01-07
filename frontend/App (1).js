import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  return <MyComponent></MyComponent>;
}

function MyComponent() {
  const [message, setmessage] = useState("Lets chat here...");
  const [list, setList] = useState([]);

  const post = () => {
    const newList = [message, ...list];
    setList(newList);
    setmessage("");
  };

  const changeMessage = (e) => {
    const newMessage = e.target.value;
    setmessage(newMessage);
  };

  return (
    <div>
      <h1>
        MyChatApp
        <div>
          <h6>by(Alok Singh)(210940320013)</h6>
        </div>
      </h1>
      <input type="text" value={message} onChange={changeMessage} />

      <input type="button" value="Send" onClick={post} />

      <div id="parent">
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}

//export default App;
