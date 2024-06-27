import React from 'react';
import './App-style.css';
import BoardView from "./BoardView";
import {newGame} from "../models/Game";
import {useImmer} from "use-immer";
import {Colours} from "../models/enums";

export default function App() {
    const [game, setGame] = useImmer(newGame())

    return (
        <div className="App">
            <div id={"game-stats"}>
                <h1>2 Player Chess</h1>
                <p>{game.current_player.colour} moves</p>
            </div>

            <div id={"game"} className={game.current_player.colour === Colours.WHITE ? "reverse" : ""}>
              <div className={"Taken-Pieces " +  (game.current_player.colour === Colours.WHITE ? "bottom" : "top")}>
                { game.player1.taken_pieces.map(piece => {
                  const name = `Piece=${piece.piece}, Colour=${piece.colour}.svg`;
                  return <img className={"Piece"} src={`${process.env.PUBLIC_URL}/pieces/${name}`} alt={`${piece.colour} ${piece.piece}`}/>
                }) }
              </div>

              <BoardView gameState={[game, setGame]}/>

              <div className={"Taken-Pieces " +  (game.current_player.colour === Colours.WHITE ? "top" : "bottom")}>
                { game.player2.taken_pieces.map(piece => {
                  const name = `Piece=${piece.piece}, Colour=${piece.colour}.svg`;
                  return <img className={"Piece"} src={`${process.env.PUBLIC_URL}/pieces/${name}`} alt={`${piece.colour} ${piece.piece}`}/>
                }) }
              </div>
            </div>
        </div>
  );
}
