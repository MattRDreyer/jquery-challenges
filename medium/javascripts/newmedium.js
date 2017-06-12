  $(function() {

    var teamone_shoot = $("#teamone_shoot");
    var teamone_numshots = $("#teamone_numshots");
    var teamone_numhits = $("#teamone_numhits");
    var mario = new Audio("/Users/n0204489/Desktop/jquery-challenges/medium/audio/Mario-jump-sound.mp3");
    var newteamone_numshots = 0;
    var newteamone_numhits = 0;

    teamone_shoot.on("click", function() {
      newteamone_numshots = newteamone_numshots + 1;
      // console.log(newteamone_numshots);
      teamone_numshots.html(newteamone_numshots);
      mario.play();

      if (Math.random() < .3) {
        newteamone_numhits = newteamone_numhits + 1;
        $("body").css("background", "yellow");
      }

      //translate num of shots and hits to html
      teamone_numshots.html(newteamone_numshots);
      teamone_numhits.html(newteamone_numhits);

    })

    var teamtwo_shoot = $("#teamtwo_shoot");
    var teamtwo_numshots = $("#teamtwo_numshots");
    var teamtwo_numhits = $("#teamtwo_numhits");
    var mario = new Audio("/Users/n0204489/Desktop/jquery-challenges/medium/audio/Mario-jump-sound.mp3");
    var newteamtwo_numshots = 0;
    var newteamtwo_numhits = 0;

    teamtwo_shoot.on("click", function() {
      newteamtwo_numshots = newteamtwo_numshots + 1;
      teamtwo_numshots.html(newteamtwo_numshots);
      mario.play();

      if (Math.random() > .7) {
        newteamtwo_numhits = newteamtwo_numhits + 1;
        $("body").css("background", "blue");
      }

      //translate num of hits and shots to html
      teamtwo_numshots.html(newteamtwo_numshots);
      teamtwo_numhits.html(newteamtwo_numhits);

    })

    var num_resets = $("#num_resets");
    var reset_button = $("#reset");
    var reset_audio = new Audio("/Users/n0204489/Desktop/jquery-challenges/medium/audio/game_reset.mp3");
    var newnum_resets = 0;

    reset_button.on("click", function() {
      reset_audio.play();
      newnum_resets = newnum_resets + 1;
      num_resets.html(newnum_resets);
      $("body").css("background", "white");
      teamtwo_numshots.html(0);
      teamtwo_numhits.html(0);
      newteamtwo_numshots = 0;
      newteamtwo_numhits = 0;
      teamone_numshots.html(0);
      teamone_numhits.html(0);
      newteamone_numshots = 0;
      newteamone_numhits = 0;

    })

  });
