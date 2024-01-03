import './PieceView-style.css';
import React from "react";
import {Colours, Pieces} from "../models/enums";

type args = {
    piece: Pieces,
    colour: Colours,
    onClick: any
}

// React Component for a chess piece
export default function PieceView({piece, colour, onClick}: args) {
    const name = `Piece=${piece}, Colour=${colour}.svg`;

    return (
        <button className="Piece" onClick={onClick}>
            <img alt={`${colour} ${piece}`} src={`${process.env.PUBLIC_URL}/pieces/${name}`}/>
        </button>
    );
}