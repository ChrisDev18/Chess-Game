import React from 'react';
import './App-style.css';
import BoardView from "./BoardView";
import Game from "../models/Game";
import {useImmer} from "use-immer";

export default function App() {
    const [game, setGame] = useImmer(new Game())

    return (
        <div className="App">
            <h1>Chess Game</h1>
            <BoardView gameState={[game, setGame]}/>
        </div>
    );
}
