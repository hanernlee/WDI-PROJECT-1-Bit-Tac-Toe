# BIT TAC TOE
***
Tic Tac Toe (or also noughts and crosses) is a two player game who take turns marking spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.
***
## Technologies

1. HTML
2. CSS
3. JAVASCRIPT
***
## Game Mechanics

There are currently two modes for this game:
- One Player Mode (default Pokemon selected is always Pikachu)
- Two Player Mode

![alt text](http://imgur.com/ro0G7gx)

### One Player Mode
- Human Player is able to choose any starter Pokemon at any time of the game
- Human Player always start first
- Computer randomly selects an empty playable space

### Two Player Mode
- Both Human Players are allowed to choose any starter Pokemon at any time of the game
- Player One always starts first followed by Player Two in the next round (the turns alternate)
- Player One is always Purple
- Player Two is always Pink
***
## Challenges

In developing this web application, there were a lot of challenges that I faced. I was not entirely happy with the way my function was written to check for wins. Perhaps I could have used a loop and at the same time check for winning combinations.

Other challenges involved understanding how to append child image as well as playing around with modals. This project was definitely a good learning experience as a beginner.


###Touch Compatibility on iOS devices
CSS:hover was causing a few issues when I loaded this on an iPhone, below code was added to remove hover ability when the device is touch capable

Added class no-touch to element with hover

```
class="no-touch"
```
Added below script in app.js

```
if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += "no-touch";
}
```
***
## Final Thoughts & Acknowledgements

My very first front-end web application! I took on a slightly retro approach towards styling this app.

Overall, the project was an awesome experience and I would do it again in a heartbeat with cleaner code the next time. Special thanks to [DT](https://github.com/epoch), [Matt](https://github.com/mattswann), [Hugh](https://github.com/hughfm) and the iterm8s class for all the assistance and guidance!

Image Source: I do not own any of the gifs used
***
###Links

#### [Github Repo] (https://github.com/hanernlee/tictactoe)

#### [Play BitTacToe!] (http://hanernlee.github.io/WDI-PROJECT-1-Bit-Tac-Toe/)

*This project was undertaken as part of the General Assembly WDI course.*
