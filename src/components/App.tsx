import React from 'react';
import './App-style.css';
import BoardView from "./BoardView";
import {newGame} from "../models/Game";
import {useImmer} from "use-immer";

export default function App() {
    const [game, setGame] = useImmer(newGame())

    return (
        <div className="App">
            <div id={"game-stats"}>
                <h1>Chess Game</h1>
                <p>It's {game.current_player.colour}'s turn</p>
            </div>
            <BoardView gameState={[game, setGame]}/>
        </div>
    );
}
