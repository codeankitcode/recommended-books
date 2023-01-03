import "./styles.css";
import React, { useState } from "react";

let bookSet = {
  nonfiction: [
    {
      name: "The Rational Optimist",
      disc: "Do you want to know if the future is getting better or worse?"
    },
    { name: "Sapiens", disc: "Do you want to know why Human runs the world?" },
    { name: "A Short History Of Nearly Everything", disc: "As the title says." }
  ],
  fiction: [
    {
      name: "The Alchemist",
      disc: "A feel good book with many things to learn."
    },
    {
      name: "Karmabhoomi",
      disc: "We often miss reality element in fictions but not in this one."
    },
    { name: "Three Mistakes of My Life", disc: "Movie but in a book." }
  ],
  autobiography: [
    {
      name: "My Experiments With Truth",
      disc:
        "Noone is as big as Bapu in this country. And a little guide to know why."
    },
    {
      name: "Surely You're Joking Mr. Feynman",
      disc: "Not exactly autobiography but many anecdotes of a curious man."
    },
    { name: "Arnold", disc: "I knew Arnold only by this book. What a Man." }
  ]
};

let booksToShow = Object.keys(bookSet);

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("nonfiction");
  function genreSelected(genre) {
    setSelectedGenre(genre);
  }
  return (
    <div className="App" style={{ maxWidth: "60%", margin: "auto" }}>
      <h1>📚 Good Books</h1>
      <p>
        Want to know my favourite books? <br />
        Select the genre
      </p>

      <div style={{ borderBottom: "1px solid black" }}>
        {booksToShow.map((genre) => (
          <button
            onClick={() => genreSelected(genre)}
            style={{
              padding: "7px 8px",
              margin: "5px 5px 10px 5px",
              cursor: "pointer",
              background: "#007bff",
              color: "white",
              fontSize: "15px",
              border: "none",
              borderRadius: "8px"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {bookSet[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                margin: "15px",
                border: "1px solid black",
                padding: "10px",
                textAlign: "left",
                fontWeight: "400"
              }}
            >
              <div style={{ margin: "5px 0" }}>{book.name}</div>
              <div>{book.disc}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
