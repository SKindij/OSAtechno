  let currentScore;
  let bestScore = 0;
  let bestGamer = '';   
  let AllBestScore = 0; 

  const milisec = 1000;
  let timeEfect = 500;
  let coma = 2;
  const gameDuration = 5; // time of game 5 seconds 

  let startTime; // start time
  let timeEnded = true; // boolean indicating if game is ended
    // we get DOM references for our HTML-elements
    let timerText = document.getElementById('gameTimer');
    let scoreText = document.getElementById('gameScore');
 
    const gameStart = document.getElementById('gameStart');

    const gameBestRes = document.getElementById('gameBestRes');
    const gameBestAllTime = document.getElementById('gameBestAllTime');

    const clearBestRes = document.getElementById('clearBestRes');
    const clearAllBest = document.getElementById('clearAllBest');	

    const clickMeBtn = document.getElementById('clickMe');


    // method called when the game starts
    function startGame() {
      currentScore = 0;
      gameStart.setAttribute('disabled', true);
      timeEnded = false;
        // we get start time
        startTime = new Date().getTime();

      // we create a timer with the setInterval method
      let timerId = setInterval(function() {
        let totalTime = (new Date().getTime() - startTime) / milisec;

        // while totalTime lower than gameDuration, we update timer
        if (totalTime < gameDuration) {
          timerText.textContent = totalTime.toFixed(coma);

        } else {
          // otherwise, game is ended, we clear interval and we set game as ended
          timeEnded = true;
          clearInterval(timerId);
          // we call the end game method
          endGame();
        }
      }, 1);
  }

  // end game method
  function endGame() {
    timerText.textContent = gameDuration.toFixed(coma);
    
    // we display result to the user in delayed mode 
    setTimeout(function() {
      alert('You made ' + currentScore + ' clicks. Try again!');
    }, timeEfect);

    const nickName = document.getElementById('userName').value;
 

    if (currentScore > bestScore) {
        bestScore = currentScore;

        window.sessionStorage.setItem('BeSeRes', `${bestScore}`);
    }

    if (currentScore > AllBestScore) {
        AllBestScore = currentScore;
        bestGamer = nickName;

        window.localStorage.setItem('AlBeSco', `${AllBestScore}`)
        window.localStorage.setItem('beGam', `${bestGamer}`)
    }



    gameStart.removeAttribute('disabled'); 
  }

  // we set a click event listener on the start button
  gameStart.addEventListener('click', function() {

    try {
        if (document.getElementById('userName').value === '') { 
        throw new Error('Empty nickname')          
        } 
        startGame();        
    } catch (Error) {
        alert('Empty nickname');
        return false;
    }

/*
      if (document.getElementById('userName').value === '') {
        alert('Empty nickname');
        return false;
      } else {
        startGame();       
      } 
*/

  });

  // we update the currentScore when the user is clicking
  clickMeBtn.addEventListener('click', function() {
    if (!timeEnded) {
      currentScore++;
      scoreText.textContent = currentScore;

    }
  });


  gameBestRes.addEventListener('click', function() {
          let BeSeRes = window.sessionStorage.getItem('BeSeRes');
    alert(`Best session result is: ${BeSeRes} clicks`);
  });

  gameBestAllTime.addEventListener('click', function() {
          let AlBeSco = window.localStorage.getItem('AlBeSco');
          let beGam = window.localStorage.getItem('beGam'); 
    alert(`Best result whole time: ${AlBeSco} clicks by ${beGam}`);
  });


  clearBestRes.addEventListener('click', function() {
      window.sessionStorage.removeItem('BeSeRes')
      bestScore = 0;
  });

  clearAllBest.addEventListener('click', function() {
      window.localStorage.removeItem('AlBeSco');
      window.localStorage.removeItem('beGam');
      AllBestScore = 0;
      bestGamer = '';
  });


  




