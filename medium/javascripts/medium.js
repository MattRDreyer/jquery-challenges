(function() {
  window.onload = function() {
    var teamone_shoot = document.querySelector("#teamone_shoot");
    var teamone_numshots = document.querySelector("#teamone_numshots");
    var teamone_numhits = document.querySelector("#teamone_numhits");
    var mario = new Audio("/Users/n0204489/Desktop/jquery-challenges/medium/audio/Mario-jump-sound.mp3");
      console.log(teamone_shoot)
    teamone_shoot.addEventListener("click", function() {
      console.log("teamone_shoot");
      var newteamone_numshots = parseInt(teamone_numshots.innerHTML) + 1;
      mario.play();
      if (Math.random() < .3) {
        var newteamone_numhits = parseInt(teamone_numhits.innerHTML) + 1;
        $("body").css("background", "yellow");
      } else {
        var newteamone_numhits = parseInt(teamone_numhits.innerHTML) + 0;
      }

      teamone_numshots.innerHTML = newteamone_numshots;
      teamone_numhits.innerHTML = newteamone_numhits;
    })
    var teamtwo_shoot = document.querySelector("#teamtwo_shoot");
    var teamtwo_numshots = document.querySelector("#teamtwo_numshots");
    var teamtwo_numhits = document.querySelector("#teamtwo_numhits");
    var mario = new Audio("/Users/n0204489/Desktop/jquery-challenges/medium/audio/Mario-jump-sound.mp3");
    console.log(teamtwo_shoot);
    teamtwo_shoot.addEventListener("click", function() {
      console.log("teamtwo_shoot");
      var newteamtwo_numshots = parseInt(teamtwo_numshots.innerHTML) + 1;
      mario.play();
      if (Math.random() > .7) {
        var newteamtwo_numhits = parseInt(teamtwo_numhits.innerHTML) + 1;
        $("body").css("background", "blue");
      } else {
        var newteamtwo_numhits = parseInt(teamtwo_numhits.innerHTML) + 0;
      }

      teamtwo_numshots.innerHTML = newteamtwo_numshots;
      teamtwo_numhits.innerHTML = newteamtwo_numhits;
    })
    var num_resets = document.querySelector("#num_resets");
    var reset_button = document.querySelector("#reset");
    var defaultValue = 0;
    var reset_audio = new Audio("/Users/n0204489/Desktop/jquery-challenges/medium/audio/game_reset.mp3");
    //<link rel="stylesheet" type="text/css" href="assets/stylesheets/style.css">
    reset.addEventListener("click", function() {
      var newnum_resets = parseInt(num_resets.innerHTML) + 1;
      $("body").css("background", defaultValue);
      reset_audio.play();
      var newteamtwo_numshots = defaultValue;
      var newteamtwo_numhits = defaultValue;
      var newteamone_numshots = defaultValue;
      var newteamone_numhits = defaultValue;
      console.log("num_resets");
      num_resets.innerHTML = newnum_resets;
      teamtwo_numshots.innerHTML = defaultValue;
      teamtwo_numhits.innerHTML = defaultValue;
      teamone_numshots.innerHTML = defaultValue;
      teamone_numhits.innerHTML = defaultValue;
    })
  }
})();
