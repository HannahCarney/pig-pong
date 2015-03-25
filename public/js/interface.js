
function deathLol(playerScore) {
          var score = playerScore
          console.log(playerScore)
        
        if (dead = true && score != undefined) {
            audio();
            $('#score').text(score);
          }

        if (highscore < score) {
            highscore = score;
            $('#highscore').text(score);
          }    

      } 

function audio() {

  ex_sound = game.add.audio('ex_sound');
  ex_sound.play();

}

