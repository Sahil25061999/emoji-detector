import { useState } from "react";
import "./styles.css";

const emojiList = {
  "๐": "happy",
  "๐ค": "angry",
  "๐คณ": "selfie",
  "๐ช": "bored",
  "๐ถ": "speechless",
  "๐": "sad",
  "๐ฑ": "shock",
  "๐ด": "sleepy",
  "๐ค": "Hug",
  "๐คจ": "confuse"
};

export default function App() {
  const [emoji, setEmojiMeaning] = useState("");
  function handleInput(e) {
    const inputEmoji = e.target.value;
    let meaning = emojiList[inputEmoji];

    if (meaning === undefined) {
      meaning = "๐ถ we dont have this in our database.";
    }

    if (inputEmoji == "") {
      meaning = "emojis we know";
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
        placeholder={"Search your emoji"}
        style={{ height: "1.5rem", padding: ".5rem", width: "50%" }}
        type="text"
        onChange={handleInput}
      />
      {/* <h2>{emoji} </h2> */}
      <div>
        <h2>{emoji ? emoji : "emojis we know"}</h2>
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
