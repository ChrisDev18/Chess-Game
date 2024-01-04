import React from 'react';
import './App-style.css';
import BoardView from "./BoardView";
import {newGame} from "../models/Game";
import {useImmer} from "use-immer";

export default function App() {
    const [game, setGame] = useImmer(newGame())

    return (
        <div className="App">
            <h1>Chess Game</h1>
            <BoardView gameState={[game, setGame]}/>
        </div>
    );
}
