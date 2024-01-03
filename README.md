# Chess written in TypeScript
#### A basic chess game written using TypeScript.

## A UI written in React
The User Interface is written using functional React components.
There are components for:
- [App](src/components/App.tsx) - Root component
- [BoardView](src/components/BoardView.tsx) - Displays the chessboard
- [SquareView](src/components/SquareView.tsx) - Renders each square of the chessboard
- [PieceView](src/components/PieceView.tsx) - Renders each chesspiece

Each component has respective styling under the file `component_name-style.css`.
_Both Components and Stylesheets can be viewed in the [components folder](src/components)._

_Note: [`index.tsx`](src/index.tsx), which connects the React app to the browser DOM,
is held in the [src folder](src)_

## Game logic written with TS classes
Behind the UI is a hierarchy of classes which hold data and control
the logic of the chess game. **There are classes for:**
- [Game](src/models/Game.ts) - Controls the flow of the game - this is the highest class
- [Player](src/models/Player.ts) - Acts as a controller for any moves made.
- [Chessboard](src/models/ChessBoard.ts) - Holds the array of chessboard squares
- [Square](src/models/Square.ts) - Holds information about which piece is on a given square.

_These can be viewed in the [models folder](src/models)._

**As well as the pieces (which all extend [Piece](src/models/pieces/Piece.ts)):**
- [Pawn](src/models/pieces/Pawn.ts)
- Bishop (Not yet implemented)
- [Knight](src/models/pieces/Knight.ts)
- [Rook](src/models/pieces/Rook.ts)
- Queen (Not yet implemented)
- King (Not yet implemented)

_Pieces can be viewed in the [models/pieces folder](src/models/pieces)._


## Starting the Development Server

In the project directory, you can run:

`npm start`

which runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in a browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
