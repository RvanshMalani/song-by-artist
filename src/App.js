import React from "react";
import "./styles.css";
import { useState } from "react";
const songs = {
  arijit: [
    { songName: "Agar tum sath ho", movie: "tamasha" },
    { songName: " khairiyat", movie: "chichore" },
    { songName: " Shayad", movie: "Love Aaj kal" },
    { songName: " channa Mereya", movie: "Ae Dil He Muskil" }
  ],

  amitTrivedi: [
    { songName: "Namo Namo", movie: "Kedarnath" },
    { songName: "Love you Zindagi", movie: "Dear Zindgi" },
    { songName: "Chokra Jawaan", movie: "Ishaqjaade" },
    { songName: "Naina Da Kya Kasoor", movie: "andhadhun" }
  ],
  shaan: [
    { songName: "chand sifarish", movie: "Fanaa" },
    { songName: "bum bum bole", movie: "taare zameen par" },
    { songName: "aal izz well", movie: "3 idiots" },
    { songName: "chaar kadam", movie: "PK" }
  ]
};

export default function App() {
  var [singerName, setSingerName] = useState("arijit");
  function ClickHandler(singer) {
    setSingerName(singer);
  }
  var singers = Object.keys(songs);
  return (
    <div classsongName="App">
      <h1 style={{ backgroundColor: "#FBBF24", textAlign: "center" }}>
        {" "}
        song filter singer{" "}
      </h1>
      <div>
        {singers.map((singer) => (
          <button
            onClick={() => ClickHandler(singer)}
            style={{
              cursor: "pointer",
              backgroundColor: "#FBBF24",
              margin: "0rem 2rem",
              padding: "0.5rem"
            }}
          >
            {singer}
          </button>
        ))}
      </div>
      <p style={{ color: "#FBBF24", textAlign: "center", FontWeight: "bold" }}>
        {" "}
        See songs by your favorite artist
      </p>

      <hr />
      <div>
        <ul>
          {songs[singerName].map((song) => (
            <li
              key={song.songName}
              style={{
                listStyle: "none",
                border: "1px solid ",
                width: "80%",
                backgroundColor: "#FBBF24",
                padding: "1rem",
                margin: "1rem"
              }}
            >
              {" "}
              <div>
                {" "}
                <span style={{ fontWeight: "bold", paddingRight: "1rem" }}>
                  SongName:
                </span>{" "}
                {song.songName}{" "}
              </div>
              <div>
                {" "}
                <span style={{ fontWeight: "bold", paddingRight: "1rem" }}>
                  MovieName:
                </span>{" "}
                {song.movie}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
