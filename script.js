var whiteColor = "#2772a3";
var blackColor = "#236591";
var ST1 = 0; //1
var ST2 = 20; //0.9
var ST3 = 60; //0.7
var ST4 = 90; //0.5
var ST5 = 120; //0.3
var ST6 = 150; //0.1
var ST7 = 180; //0.0

/* Toggle */

$(document).ready(function () {
  // Octave & Key bind Button
  $(".btnOctave").mousedown(function (i) {
    if (i.which === 1) {
      $(".btnOctave").css("background-color", "#138bbb");
      $(".btnKeyBind").css("background-color", "#dbdbdb");
      $(".octave").css("visibility", "visible");
      $(".binding").css("visibility", "hidden");
      $(".binding_b").css("visibility", "hidden");

      $(".tog_on").css("visibility", "visible");
      $(".tog_off").css("visibility", "hidden");
    }
  });
  $(".btnKeyBind").mousedown(function (i) {
    if (i.which === 1) {
      $(".btnKeyBind").css("background-color", "#138bbb");
      $(".btnOctave").css("background-color", "#dbdbdb");
      $(".octave").css("visibility", "hidden");
      $(".binding").css("visibility", "visible");
      $(".binding_b").css("visibility", "visible");

      $(".tog_off").css("visibility", "visible");
      $(".tog_on").css("visibility", "hidden");
    }
  });

  // Sustain Button

  $(".btn_sus").mousedown(function (i) {
    if (i.which === 1) {
      $(".btn_sus").css("background-color", "#138bbb");
      $(".btn_nosus").css("background-color", "#dbdbdb");
      $(".tog_on_2").css("visibility", "visible");
      $(".tog_off_2").css("visibility", "hidden");
      var ST1 = 0; //1
      var ST2 = 0; //0.9
      var ST3 = 0; //0.7
      var ST4 = 0; //0.5
      var ST5 = 0; //0.3
      var ST6 = 0; //0.1
      var ST7 = 0; //0.0
    }
  });
  $(".btn_nosus").mousedown(function (i) {
    if (i.which === 1) {
      $(".btn_nosus").css("background-color", "#138bbb");
      $(".btn_sus").css("background-color", "#dbdbdb");
      $(".tog_off_2").css("visibility", "visible");
      $(".tog_on_2").css("visibility", "hidden");
    }
  });
});

/*Chord Pattern Generation*/

$(document).ready(function () {
  $(".genBtn").mousedown(function (i) {
    if (i.which === 1) {
      var opt1 = ["C Major", "C Major", "C Major", "A Minor", "A Minor"];
      var out1 = opt1[Math.floor(Math.random() * opt1.length)];
      $(".genOut1").text(out1);

      var opt2 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
      var out2 = opt2[Math.floor(Math.random() * opt2.length)];
      $(".genOut2").text(out2);

      if (out2 == "Ab Major") {
        var opt3 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "Eb Major") {
        var opt3 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "Bb Major") {
        var opt3 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "F Major") {
        var opt3 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "C Major") {
        var opt3 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "G Major") {
        var opt3 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "D Major") {
        var opt3 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "A Major") {
        var opt3 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "E Major") {
        var opt3 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "A Minor") {
        var opt3 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "E Minor") {
        var opt3 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "B Minor") {
        var opt3 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "D Minor") {
        var opt3 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }

      if (out2 == "G Minor") {
        var opt3 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
        var out3 = opt3[Math.floor(Math.random() * opt3.length)];
        $(".genOut3").text(out3);

        if (out3 == "Ab Major") {
          var opt4 = ["C Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Eb Major") {
          var opt4 = ["C Major", "G Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "Bb Major") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "F Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "C Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "A Minor", "E Minor", "B Minor", "D Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Major") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "Ab Major", "A Minor", "E Minor", "B Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "A Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "E Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "Eb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "B Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "E Major", "F Major", "Bb Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "D Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "A Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }

        if (out3 == "G Minor") {
          var opt4 = ["C Major", "G Major", "D Major", "F Major", "Bb Major", "Eb Major", "Ab Major", "A Minor", "E Minor", "B Minor", "D Minor", "G Minor"];
          var out4 = opt4[Math.floor(Math.random() * opt4.length)];
          $(".genOut4").text(out4);
        }
      }
    }
  });
});

/* Mouse Click Function */

$(document).ready(function () {
  $(".key").mousedown(function (i) {
    if (i.which === 1) {
      $(this).children(".note").get(0).currentTime = 0;
      $(this).children(".note").prop("volume", 1);
      $(this).children(".note").get(0).play();
      var btn = $(this);
    }

    if (i.which === 1) {
      $(document).mouseup(function (i) {
        if (i.which === 1) {
          var myVar;
          /*
          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0.95);
          }, 0);
          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0.9);
          }, 20);
   
          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0.8);
          }, 40);

          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0.7);
          }, 60);

          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0.6);
          }, 80);
          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0.5);
          }, 90);
          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0.4);
          }, 100);
          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0.2);
          }, 120);
          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0.1);
          }, 140);
          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0.05);
          }, 160); */
          myVar = setTimeout(function () {
            $(btn).children(".note").prop("volume", 0);
            $(btn).children(".note").get(0).pause();
            $(btn).children(".note").get(0).currentTime = 0;
          }, 000);
        }
        /*
        if (i.which === 1) {
          $(".key").mousedown(function (i) {
            if (i.which === 1) {
              clearTimeout(myVar);
              $(btn).children(".note").get(0).currentTime = 0;
              $(btn).children(".note").prop("volume", 1);
            }
          });
        }
        */
      });
    }
  });
});

/* Keyboard Function */

//const time = 1000;

/* Octave 1 */

//black Bb1
$(document).ready(function () {
  var keybind = 65;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white B1
$(document).ready(function () {
  var keybind = 90;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

/* Octave 2 */

//white C2
$(document).ready(function () {
  var keybind = 88;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 68;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 67;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 70;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white E2
$(document).ready(function () {
  var keybind = 86;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 66;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 72;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white G2
$(document).ready(function () {
  var keybind = 78;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 74;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 77;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 75;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 188;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

/* Octave 3 */

//white C3
$(document).ready(function () {
  var keybind = 190;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 186;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 191;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 222;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white E3
$(document).ready(function () {
  var keybind = 81;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 87;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 51;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white G3
$(document).ready(function () {
  var keybind = 69;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 52;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 82;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 53;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 84;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

/* Octave 4 */

//white C4
$(document).ready(function () {
  var keybind = 89;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 55;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 85;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 56;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white E4
$(document).ready(function () {
  var keybind = 73;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 79;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 48;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white G4
$(document).ready(function () {
  var keybind = 80;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 189;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 219;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//black
$(document).ready(function () {
  var keybind = 187;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", blackColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

//white
$(document).ready(function () {
  var keybind = 221;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

/* Octave 5 */

//white C5
$(document).ready(function () {
  var keybind = 220;

  $(document).keydown(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    if (i.which === keybind) {
      $(sound).prop("volume", 1);
      $(sound).get(0).currentTime = 0;
      $(sound).get(0).play();
      $(sound).parent(".key").css("background", whiteColor);
      $(sound).removeClass(sound1);
    }
  });
  $(document).keyup(function (i) {
    var sound = "._" + i.which;
    var sound1 = "_" + i.which;
    var key = "." + i.which;
    var STO;
    if (i.which === keybind) {
      $(key).addClass(sound1);
      $(sound).prop("volume", 0.3);
      $(sound).parent(".key").css("background", "");

      STO = setTimeout(function () {
        $(sound).prop("volume", 1);
      }, ST1);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.9);
      }, ST2);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.7);
      }, ST3);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.5);
      }, ST4);

      STO = setTimeout(function () {
        $(sound).prop("volume", 0.3);
      }, ST5);
      STO = setTimeout(function () {
        $(sound).prop("volume", 0.1);
      }, ST6);

      STO = setTimeout(function () {
        $(sound).get(0).pause();
        $(sound).get(0).currentTime = 0;
        $(sound).prop("volume", 1);
      }, ST7);

      $(document).keydown(function (i) {
        if (i.which === keybind) {
          clearTimeout(STO);
        }
      });
    }
  });
});

/* Key Pad Chords*/

/* Major */

//Ab major
$(document).ready(function () {
  var keybind = 97;
  var find = ".74";
  var s1 = ".Ab2";
  var s_1 = "Ab2";
  var s2 = ".C4";
  var s3 = ".Eb4";
  var s4 = ".Ab4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//Eb major
$(document).ready(function () {
  var keybind = 98;
  var find = ".70";
  var s1 = ".Eb2";
  var s_1 = "Eb2";
  var s2 = ".Bb3";
  var s3 = ".Eb4";
  var s4 = ".G4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//Bb major
$(document).ready(function () {
  var keybind = 99;
  var find = ".75";
  var s1 = ".Bb2";
  var s_1 = "Bb2";
  var s2 = ".Bb3";
  var s3 = ".D4";
  var s4 = ".F4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//F major
$(document).ready(function () {
  var keybind = 100;
  var find = ".66";
  var s1 = ".F2";
  var s_1 = "F2";
  var s2 = ".A3";
  var s3 = ".C4";
  var s4 = ".F4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//C major
$(document).ready(function () {
  var keybind = 101;
  var find = ".190";
  var s1 = ".C3";
  var s_1 = "C3";
  var s2 = ".C4";
  var s3 = ".E4";
  var s4 = ".G4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//G major
$(document).ready(function () {
  var keybind = 102;
  var find = ".78";
  var s1 = ".G2";
  var s_1 = "G2";
  var s2 = ".B3";
  var s3 = ".D4";
  var s4 = ".G4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//D major
$(document).ready(function () {
  var keybind = 103;
  var find = ".67";
  var s1 = ".D2";
  var s_1 = "D2";
  var s2 = ".A3";
  var s3 = ".D4";
  var s4 = ".Gb4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//A major
$(document).ready(function () {
  var keybind = 104;
  var find = ".77";
  var s1 = ".A2";
  var s_1 = "A2";
  var s2 = ".A3";
  var s3 = ".Db4";
  var s4 = ".E4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//E major
$(document).ready(function () {
  var keybind = 105;
  var find = ".86";
  var s1 = ".E2";
  var s_1 = "E2";
  var s2 = ".B3";
  var s3 = ".E4";
  var s4 = ".Ab4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

/*Minor*/

//B minor
$(document).ready(function () {
  var keybind = 109;
  var find = ".188";
  var s1 = ".B2";
  var s_1 = "B2";
  var s2 = ".B3";
  var s3 = ".D4";
  var s4 = ".Gb4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//E minor
$(document).ready(function () {
  var keybind = 107;
  var find = ".86";
  var s1 = ".E2";
  var s_1 = "E2";
  var s2 = ".B3";
  var s3 = ".E4";
  var s4 = ".G4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//A minor
$(document).ready(function () {
  var keybind = 13;
  var find = ".77";
  var s1 = ".A2";
  var s_1 = "A2";
  var s2 = ".A3";
  var s3 = ".C4";
  var s4 = ".E4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//D minor
$(document).ready(function () {
  var keybind = 110;
  var find = ".67";
  var s1 = ".D2";
  var s_1 = "D2";
  var s2 = ".A3";
  var s3 = ".D4";
  var s4 = ".F4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});

//G minor
$(document).ready(function () {
  var keybind = 96;
  var find = ".78";
  var s1 = ".G2";
  var s_1 = "G2";
  var s2 = ".Bb3";
  var s3 = ".D4";
  var s4 = ".G4";
  $(document).keydown(function (i) {
    if (i.which === keybind) {
      $(s1).prop("volume", 1);
      $(s2).prop("volume", 1);
      $(s3).prop("volume", 1);
      $(s4).prop("volume", 1);
      $(s1).get(0).currentTime = 0;
      $(s2).get(0).currentTime = 0;
      $(s3).get(0).currentTime = 0;
      $(s4).get(0).currentTime = 0;
      $(s1).get(0).play();
      $(s2).get(0).play();
      $(s3).get(0).play();
      $(s4).get(0).play();
      $(s1).parent(".key").css("background", whiteColor);
      $(s2).parent(".key").css("background", whiteColor);
      $(s3).parent(".key").css("background", whiteColor);
      $(s4).parent(".key").css("background", whiteColor);
      $(s1).removeClass(s_1);
    }
  });

  $(document).keyup(function (i) {
    if (i.which === keybind) {
      $(find).addClass(s_1);
      $(s1).parent(".key").css("background", "");
      $(s2).parent(".key").css("background", "");
      $(s3).parent(".key").css("background", "");
      $(s4).parent(".key").css("background", "");
      $(s1).get(0).pause();
      $(s2).get(0).pause();
      $(s3).get(0).pause();
      $(s4).get(0).pause();
    }
  });
});
