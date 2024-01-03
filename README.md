# Chess written in TypeScript
#### A basic chess game written using TypeScript.

## A UI written in React
The User Interface is written using functional React components.
There are components for:
- [`index.tsx`](src/index.tsx) - Connects the React app to the browser DOM
- [App](src/components/App.tsx) - Root component
- [BoardView](src/components/BoardView.tsx) - Displays the chessboard
- [SquareView](src/components/SquareView.tsx) - Renders each square of the chessboard
- [PieceView](src/components/PieceView.tsx) - Renders each chesspiece

Each component has respective styling under the file `component_name-style.css`.
Both Components and Stylesheets can be viewed in the [components folder](src/components). 

_Note: `index.tsx` is held in the [src folder](src)_

## Game logic written with TS classes
Behind the UI is a hierarchy of classes which hold data and control
the logic of the chess game. There are classes for:
- [Game](src/models/Game.ts) - Controls the flow of the game
- [Player](src/models/Player.ts) - Handles which go it is
- [Chessboard](src/models/ChessBoard.ts) - Holds the array of 
- [Squares](src/models/Square.ts)

These can be viewed in the [models folder](src/models).

As well as the pieces (which all extend [Piece](src/models/pieces/Piece.ts)):
- [Pawn](src/models/pieces/Pawn.ts)
- Bishop (Not yet implemented)
- [Knight](src/models/pieces/Knight.ts)
- [Rook](src/models/pieces/Rook.ts)
- Queen (Not yet implemented)
- King (Not yet implemented)

These can be viewed in the [models/pieces folder](src/models/pieces).


## Starting the Development Server

In the project directory, you can run:

`npm start`

which runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in a browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
