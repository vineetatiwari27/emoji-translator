import React, { useState } from "react";
import "./styles.css";

var emojidictionary = {
  "😊": "smilingEmoji",
  "🐷": "pig face",
  "😍" : "Excited",
  "😲" : "amused",
  "😛" : "Teasing",
  "🍇": "grapes",
  "🍉": "water-melon",
  "😎": "cool",
  "😕": "confused face",
  "😯": "hushed face"
};
var emojisWeKnow = Object.keys(emojidictionary);

export default function App() {
  var [emojiInput, emojiOutput] = useState("");
  function textInput(event) {
    var userInput = event.target.value;
    var emojiInput = emojidictionary[userInput];
    if (emojiInput === undefined) {
      emojiInput = "can't recognize this :(";
    }
    emojiOutput(emojiInput);
  }

  function emojiClickHandler(emoji) {
    var emojiInput = emojidictionary[emoji];
    emojiOutput(emojiInput);
  }

  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input onChange={textInput}></input>

      <div>{emojiInput}</div>
      <h3>emojis we know :</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "3rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
