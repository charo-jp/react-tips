import { useState, useEffect } from "react";
import Joke from "./Joke";
import Stories from "./Stories";
function App() {
  const [userQuery, setUserQuery] = useState("");

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchQuery();
    }
  };

  const updateUserQuery = (e) => {
    console.log(userQuery);
    setUserQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello Yuya </h1>
      <div className="form">
        <input
          type="text"
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <Joke />
      <Stories />
    </div>
  );
}

export default App;
