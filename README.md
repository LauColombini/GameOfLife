# Conway's Game of Life in React Native - Challenge SpyroSoft

This project is an implementation of the famous "Conway's Game of Life" in React Native.

## Getting Started

Follow these steps to get started with the project:

1. Clone the repository to your local machine:

`git clone https://github.com/LauColombini/game-of-life`

2. Navigate to the project folder:

`cd game-of-life`

3. Install the dependencies using Yarn:

`yarn && cd ios && pod install && cd ..`

4. Run the project:

`yarn android / yarn ios`

## Features

### Main Screen (Home)

[![homescreen](https://i.imgur.com/frZSJzM.png "homescreen")](https://i.imgur.com/frZSJzM.png "homescreen")

[![infoscreen](https://i.imgur.com/9pNthcR.png "infoscreen")](https://i.imgur.com/9pNthcR.png "infoscreen")
The main screen is the actual game and includes the following features:

- **Game Grid**: Displays the current state of the game on a grid.
- **Adjust Grid Size**: You can change the grid size by adjusting the number of rows (X) and columns (Y).
- **Speed**: You can adjust the speed of the game.
- **Clear Button**: Clears the grid.
- **Start/Stop Button**: Starts or stops the game simulation.
- **Increase Speed Button**: Increases the simulation speed.

### Bottom Navigation

The bottom navigation consists of two options:

- **Main Screen**: Takes you back to the game.
- **Information Screen**: Provides information about the rules of the game and an external link to the game's wiki.
