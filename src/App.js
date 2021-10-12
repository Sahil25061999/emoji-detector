import { useState } from "react";
import "./styles.css";

const emojiList = {
  "😊": "happy",
  "😤": "angry",
  "🤳": "selfie",
  "😪": "bored",
  "😶": "speechless"
};

export default function App() {
  const [emoji, setEmojiMeaning] = useState("");
  function handleInput(e) {
    const inputEmoji = e.target.value;
    let meaning = emojiList[inputEmoji];

    if (meaning === undefined) {
      meaning = "😶 we dont have this in our database.";
    }
    setEmojiMeaning(meaning);
  }

  function handleClick(item) {
    setEmojiMeaning(emojiList[item]);
  }

  const onlyEmojiList = Object.keys(emojiList);

  return (
    <div className="App">
      <h1>Emoji detector</h1>
      <input
        style={{ height: "2rem", padding: ".5rem" }}
        type="text"
        onChange={handleInput}
      />
      <h2>{emoji} </h2>
      <div>
        <h2>emojis we know</h2>
        {onlyEmojiList.map((item) => {
          return (
            <span
              style={{ fontSize: "2rem", padding: ".5rem", cursor: "pointer" }}
              onClick={() => handleClick(item)}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
