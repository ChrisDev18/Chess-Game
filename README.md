# Chess written in TypeScript
#### A basic chess game written using TypeScript.
![Screenshot 2024-01-05 at 00 19 13](https://github.com/ChrisDev18/Chess-Game/assets/95181085/d2070ec4-7caa-4b9d-98d9-6f7ec4289580)


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

## Game logic written with TS objects
_Originally, the logic was coded using Classes and Objects.
These have now been reworked using Objects and Interfaces as these work better with React's state system._

Behind the UI is a hierarchy of objects based off interfaces which hold data and control
the logic of the chess game. **There are Interfaces for:**
- [Game](src/models/Game.ts) - Controls the flow of the game - this is the highest-level interface
- [Player](src/models/Player.ts) - Acts as a controller for any moves made.
- [Chessboard](src/models/ChessBoard.ts) - Holds the array of chessboard squares
- [Square](src/models/Square.ts) - Holds information about which piece is on a given square.

_These can be viewed in the [models folder](src/models)._

**As well as the pieces (which all implement [Piece](src/models/pieces/Piece.ts)):**
- [Pawn](src/models/pieces/Pawn.ts)
- [Bishop](src/models/pieces/Bishop.ts)
- [Knight](src/models/pieces/Knight.ts)
- [Rook](src/models/pieces/Rook.ts)
- [Queen](src/models/pieces/Queen.ts)
- [King](src/models/pieces/King.ts)

_Pieces can be viewed in the [models/pieces folder](src/models/pieces)._


## Starting the Development Server

In the project directory, you can run:

`npm start`

which runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in a browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
