
var gameMode = 0;

var playerOneScore = 0;
var playerTwoScore = 0;

var pokemon;
var pokemonTwo;

var turn = 0; //to see if P1 or P2's turn
var gameOver = 0; //to check if game is over
var takeTurns = 0; //if game has ended check if p1 or p2 starts

var newBtn = document.getElementById('newGame');
var boardGame = document.getElementById('boardContainer');

//selectable td's
var zero = document.getElementById('a1');
var one = document.getElementById('a2');
var two = document.getElementById('a3');
var three = document.getElementById('b1');
var four = document.getElementById('b2');
var five = document.getElementById('b3');
var six = document.getElementById('c1');
var seven = document.getElementById('c2');
var eight = document.getElementById('c3');

//
  boardGame.addEventListener('click', function(event) {
        if (gameMode === 0) {
          if (gameOver === 0) {
            if (event.target.tagName === 'TD') {
              if (turn === 0) {
                turn++;
                displayTurn();
                event.target.className = "X";
                event.target.appendChild(newCharacterOne(pokemon));
                console.log(event.target.id);
                checkWinner();
                computer();
              }
            }
          } else {
            document.getElementById('results').innerHTML = 'Game Over! Please start a New Game';
            runModal();
          }
        } else if (gameMode === 1) {
          if (takeTurns === 0){
            if (gameOver === 0) {
              if (event.target.tagName === 'TD') {
                if(event.target.className === 'X' || event.target.className === 'O') {
                  console.log("This is the same box!");
                } else {
                  if (turn === 0) {
                  turn++;
                  displayTurn();
                  event.target.className = "X";
                  event.target.appendChild(newCharacterOne(pokemon));
                  console.log(event.target.id);
                  checkWinner();
                  } else if (turn === 1) {
                  turn--;
                  displayTurn();
                  event.target.className = "O";
                  event.target.appendChild(newCharacterTwo(pokemonTwo));
                  console.log(event.target.id);
                  checkWinner();
                  }
                }
              }
            } else {
              document.getElementById('results').innerHTML = 'Game Over! Please start a New Game';
              runModal();
            }
          } else if (takeTurns === 1) {
            if (gameOver === 0) {
              takeTurns--;
              if (event.target.tagName === 'TD') {
                if(event.target.className === 'X' || event.target.className === 'O') {
                  console.log("This is the same box!");
                } else {
                  if (turn === 0) {
                  turn++;
                  displayTurn();
                  event.target.className = "O";
                  event.target.appendChild(newCharacterTwo(pokemonTwo));
                  console.log(event.target.id);
                  checkWinner();
                  } else if (turn === 1) {
                  turn--;
                  displayTurn();
                  event.target.className = "X";
                  event.target.appendChild(newCharacterOne(pokemon));
                  console.log(event.target.id);
                  checkWinner();
                  }
                }
              }
            } else {
              document.getElementById('results').innerHTML = 'Game Over! Please start a New Game';
              runModal();
            }
          }
        }
      });


//checkig winner through possible winning combinations
  var checkWinner = function() {

      if ((zero.className === 'X' && one.className === 'X' && two.className === 'X') || (three.className === 'X' && four.className === 'X' && five.className === 'X') || (six.className === 'X' && seven.className === 'X' && eight.className === 'X') || (zero.className === 'X' && three.className === 'X' && six.className === 'X') || (one.className === 'X' && four.className === 'X' && seven.className === 'X') || (two.className === 'X' && five.className === 'X' && eight.className === 'X') || (zero.className === 'X' && four.className === 'X' && eight.className === 'X') || (two.className === 'X' && four.className === 'X' && six.className === 'X')) {
            takeTurns++;
            gameOver++;
            playerOneScore++;
            displayOne.style.visibility = "hidden";
            displayTwo.style.visibility ="hidden";
            runModal();
            document.getElementById('results').innerHTML = 'P1 Wins!';
            document.getElementById('scoreOne').innerHTML = playerOneScore;

      } else if ((zero.className === 'O' && one.className === 'O' && two.className === 'O') || (three.className === 'O' && four.className === 'O' && five.className === 'O') || (six.className === 'O' && seven.className === 'O' && eight.className === 'O') || (zero.className === 'O' && three.className === 'O' && six.className === 'O') || (one.className === 'O' && four.className === 'O' && seven.className === 'O') || (two.className === 'O' && five.className === 'O' && eight.className === 'O') || (zero.className === 'O' && four.className === 'O' && eight.className === 'O') || (two.className === 'O' && four.className === 'O' && six.className === 'O')) {
            takeTurns++;
            gameOver++;
            playerTwoScore++;
            displayOne.style.visibility = "hidden";
            displayTwo.style.visibility ="hidden";
            runModal();
            document.getElementById('results').innerHTML = 'P2 Wins!';
            document.getElementById('scoreTwo').innerHTML = playerTwoScore;

      } else if ((zero.className === 'X' || zero.className === 'O') && (one.className === 'X' || one.className === 'O') && (two.className === 'X' || two.className === 'O') && (three.className === 'X' || three.className === 'O') && (four.className === 'X' || four.className === 'O') && (five.className === 'X' || five.className === 'O') && (six.className === 'X' || six.className === 'O') && (seven.className === 'X' || seven.className === 'O') && (eight.className === 'X' || eight.className === 'O')) {
        takeTurns++;
        gameOver++;
        displayOne.style.visibility = "hidden";
        displayTwo.style.visibility ="hidden";
        runModal();
        document.getElementById('results').innerHTML = "It's a TIE!";
      }
    }


// new game loops and clear every element
  var newGame = function() {
    choose = 0 ;
    gameOver = 0;
    turn = 0;
    displayOne.style.visibility = "hidden";
    displayTwo.style.visibility ="hidden";
    var allImages = document.getElementsByTagName('TD');

    for(var i = 0; i < allImages.length ; i++) {
      allImages[i].innerHTML = ''
      allImages[i].removeAttribute('class');
    }
    // alternatively can use the below to remove anything with this className
    // var imagesToRemove = document.getElementsByClassName('avatar');
    // while (imagesToRemove.length) {
    //   imagesToRemove[0].parentElement.removeChild(imagesToRemove[0]);
    // }
  }

newBtn.addEventListener('click', newGame);


var modal = document.getElementById('myModal');
  var runModal = function () {
    modal.style.display = "block";

    window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
    }
  }

var pika = document.getElementById('pikachu');
var bulba = document.getElementById('bulbasaur');
var squirt = document.getElementById('squirtle');
var charm = document.getElementById('charmander');

var selectAvatar = document.getElementById('selectAva');
var chooseBtn = document.getElementById('avatar');
var choose = 0;

  var chooseAvatar = function () {
    selectAvatar.style.display = "block";
    document.onclick = function(event) {
      if (event.target === selectAvatar) {
        selectAvatar.style.display = "none";
      }
    }
        selectAvatar.onclick = function () {
            if (choose === 0) {
              if (event.target.tagName === "IMG") {
                console.log(choose);
              if (event.target === pika) {
                document.getElementById('character').innerHTML = "P1 chose Pikachu";
                pokemon = 'pikachu';
                choose++;
                return pokemon;
              } else if (event.target === bulba) {
                document.getElementById('character').innerHTML = "P1 chose Bulbasaur";
                pokemon = 'bulbasaur';
                choose++;
                return pokemon;
              } else if (event.target === squirt) {
                document.getElementById('character').innerHTML = "P1 chose Squirtle";
                pokemon = 'squirtle';
                choose++;
                return pokemon;
              } else if (event.target === charm) {
                document.getElementById('character').innerHTML = "P1 chose Charmander";
                pokemon = 'charmander';
                choose++;
                return pokemon;
              }
            }
          } else if (choose === 1) {
            if (event.target.tagName === "IMG") {
              console.log(choose);
              if (event.target === pika) {
                document.getElementById('character').innerHTML = "P2 chose Pikachu";
                pokemonTwo = 'pikachu';
                choose--;
                return pokemonTwo;
              } else if (event.target === bulba) {
                document.getElementById('character').innerHTML = "P2 chose Bulbasaur";
                pokemonTwo = 'bulbasaur';
                choose--;
                return pokemonTwo;
              } else if (event.target === squirt) {
                document.getElementById('character').innerHTML = "P2 chose Squirtle";
                pokemonTwo = 'squirtle';
                choose--;
                return pokemonTwo;
              } else if (event.target === charm) {
                document.getElementById('character').innerHTML = "P2 chose Charmander";
                pokemonTwo = 'charmander';
                choose--;
                return pokemonTwo;
              }
            }
          }
      };
    }

chooseBtn.addEventListener('click', chooseAvatar);



var newCharacterOne = function (pokemon) {

  if (pokemon === "pikachu") {
    var image = document.createElement('img');
    image.src = "images/pikachu.gif";
    image.style.height = "58px";
    return image;
  } else if (pokemon === "bulbasaur") {
    var image = document.createElement('img');
    image.src = "images/bulba.gif";
    image.style.height = "58px";
    return image;
  } else if (pokemon === "squirtle") {
    var image = document.createElement('img');
    image.src = "images/squirtle.gif";
    image.style.height = "58px";
    return image;
  } else if (pokemon === "charmander") {
    var image = document.createElement('img');
    image.src = "images/charmander.gif";
    image.style.height = "58px";
    return image;
  } else {
    var image = document.createElement('img');
    image.src = "images/pikachu.gif";
    image.style.height = "58px";
    return image;
  }
}

var newCharacterTwo = function (pokemonTwo) {

  if (pokemonTwo === "pikachu") {
    var image = document.createElement('img');
    image.src = "images/pikachu.gif";
    image.style.height = "58px";
    return image;
  } else if (pokemonTwo === "bulbasaur") {
    var image = document.createElement('img');
    image.src = "images/bulba.gif";
    image.style.height = "58px";
    return image;
  } else if (pokemonTwo === "squirtle") {
    var image = document.createElement('img');
    image.src = "images/squirtle.gif";
    image.style.height = "58px";
    return image;
  } else if (pokemonTwo === "charmander") {
    var image = document.createElement('img');
    image.src = "images/charmander.gif";
    image.style.height = "58px";
    return image;
  } else {
    var image = document.createElement('img');
    image.src = "images/bulba.gif";
    image.style.height = "58px";
    return image;
  }
}

var restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', function() {
  playerOneScore = 0;
  playerTwoScore = 0;
  turn = 0;
  displayOne.style.visibility = "hidden";
  displayTwo.style.visibility ="hidden";
  document.getElementById('scoreOne').innerHTML = playerOneScore;
  document.getElementById('scoreTwo').innerHTML = playerTwoScore;
  newGame();
});

var displayOne = document.querySelector('#firstPlayer');
var displayTwo = document.querySelector('#secondPlayer');


var displayTurn = function () {
  if (turn === 0) {
    displayTwo.style.visibility ="hidden";
    displayTwo.style.transform = "none";
    displayOne.style.visibility = "visible";
    displayOne.style.transform = 'translateX(-10em)';
  } else {
    displayOne.style.visibility = "hidden";
    displayOne.style.transform = "none";
    displayTwo.style.visibility = "visible";
    displayTwo.style.transform = 'translateX(10em)';
  }
}

var computer = function () {
      pokemonTwo = 'bulbasaur';
      var emptyBox = [];
      if (gameOver === 0) {
        if (turn === 1) {

          var allBoxes = document.getElementsByTagName('TD');

          for(var i = 0; i < allBoxes.length ; i++) {
            if (allBoxes[i].innerHTML === "") {
            emptyBox.push(allBoxes[i]);
            }
          }
          console.log(emptyBox);

          var randomBox = emptyBox[Math.floor(Math.random()*emptyBox.length)];
          console.log(randomBox);

          var appendComputer = function() {
            randomBox.className = "O";
            randomBox.appendChild(newCharacterTwo(pokemonTwo));
            turn--;
            checkWinner();
            displayTurn();
          }
          setTimeout (appendComputer , 2000);
          }
        }
}


var modeBtn = document.getElementById('game');
var getGame = document.getElementById('gameStyle');
var oneP = document.getElementById('onePlayer');
var twoP = document.getElementById('twoPlayer')

var gameModes = function () {
  getGame.style.display = "block";

  getGame.onclick = function () {
    if (event.target === oneP ) {
      gameMode = 0;
      newGame();
      document.getElementById('scoreOne').innerHTML = 0;
      document.getElementById('scoreTwo').innerHTML = 0;
      playerOneScore = 0;
      playerTwoScore = 0;
    } else if (event.target === twoP) {
      gameMode = 1;
      newGame();
      document.getElementById('scoreOne').innerHTML = 0;
      document.getElementById('scoreTwo').innerHTML = 0;
      playerOneScore = 0;
      playerTwoScore = 0;
    }
  }

  document.onclick = function(event) {
    if (event.target === getGame) {
      getGame.style.display = "none";
    }
  }
}

modeBtn.addEventListener('click', gameModes);
