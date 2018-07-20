/*
	Author: Nazmus Nasir
	Website: https://www.EasyProgramming.net
*/

$(document).ready(function () {
    $(function() {
        function hexFromRGB(r, g, b) {
          var hex = [
            r.toString( 16 ),
            g.toString( 16 ),
            b.toString( 16 )
          ];
          $.each( hex, function( nr, val ) {
            if ( val.length === 1 ) {
              hex[ nr ] = "0" + val;
            }
          });
          return hex.join( "" ).toUpperCase();
        }
        function refreshSwatch() {
          var red = $( "#red" ).slider( "value" ),
            green = $( "#green" ).slider( "value" ),
            blue = $( "#blue" ).slider( "value" ),
            hex = hexFromRGB( red, green, blue );
          $( "#swatch" ).css( "background-color", "#" + hex );
            $("#redNum").text(red);
            $("#greenNum").text(green);
            $("#blueNum").text(blue);
        }

        $( "#red, #green, #blue" ).slider({
          orientation: "vertical",
          range: "min",
          max: 255,
          value: 127,
          slide: refreshSwatch,
          change: refreshSwatch
        });

        $( "#red" ).slider( "value", 255 );
        $( "#green" ).slider( "value", 140 );
        $( "#blue" ).slider( "value", 60 );
  });

    $("#submitColor").on("click",function(){
        var param = {
            "red" : $("#redNum").text(),
            "green" : $("#greenNum").text(),
            "blue" : $("#blueNum").text()
        };
        $.ajax({
            url: "rgb.php",
            method: "GET",
            data: param,
            success: function(data){
                console.log(data);
            }
        });
    });
    
    // default color breakdown - can add more
    $(".defaultColors").on("click",function(){
        var color = $(this).data("color");
        switch(color){
            case "red":
                $("#redNum").text(255);
                $("#greenNum").text(0);
                $("#blueNum").text(0);
                $( "#red" ).slider( "value", 255 );
                $( "#green" ).slider( "value", 0 );
                $( "#blue" ).slider( "value", 0 );
            break;
            case "blue":
                $("#redNum").text(0);
                $("#greenNum").text(0);
                $("#blueNum").text(255);
                $( "#red" ).slider( "value", 0 );
                $( "#green" ).slider( "value", 0 );
                $( "#blue" ).slider( "value", 255 );
            break;
            case "green":
                $("#redNum").text(0);
                $("#greenNum").text(255);
                $("#blueNum").text(0);
                $( "#red" ).slider( "value", 0 );
                $( "#green" ).slider( "value", 255 );
                $( "#blue" ).slider( "value", 0 );
            break;
            case "yellow":
                $("#redNum").text(255);
                $("#greenNum").text(255);
                $("#blueNum").text(0);
                $( "#red" ).slider( "value", 255 );
                $( "#green" ).slider( "value", 255 );
                $( "#blue" ).slider( "value", 0 );
            break;
            case "orange":
                $("#redNum").text(255);
                $("#greenNum").text(165);
                $("#blueNum").text(0);
                $( "#red" ).slider( "value", 255 );
                $( "#green" ).slider( "value", 165 );
                $( "#blue" ).slider( "value", 0 );
            break;
            case "cyan":
                $("#redNum").text(0);
                $("#greenNum").text(255);
                $("#blueNum").text(255);
                $( "#red" ).slider( "value", 0 );
                $( "#green" ).slider( "value", 255 );
                $( "#blue" ).slider( "value", 255 );
            break;
            case "yellowgreen":
                $("#redNum").text(154);
                $("#greenNum").text(205);
                $("#blueNum").text(50);
                $( "#red" ).slider( "value", 154 );
                $( "#green" ).slider( "value", 205 );
                $( "#blue" ).slider( "value", 50 );
            break;
            case "magenta":
                $("#redNum").text(255);
                $("#greenNum").text(0);
                $("#blueNum").text(255);
                $( "#red" ).slider( "value", 255 );
                $( "#green" ).slider( "value", 0 );
                $( "#blue" ).slider( "value", 255 );
            break;
            case "white":
                $("#redNum").text(255);
                $("#greenNum").text(255);
                $("#blueNum").text(255);
                $( "#red" ).slider( "value", 255 );
                $( "#green" ).slider( "value", 255 );
                $( "#blue" ).slider( "value", 255 );
            break;
            case "black":
                $("#redNum").text(0);
                $("#greenNum").text(0);
                $("#blueNum").text(0);
                $( "#red" ).slider( "value", 0 );
                $( "#green" ).slider( "value", 0 );
                $( "#blue" ).slider( "value", 0 );
            break;
        }
        $("#submitColor").trigger("click");
    });
});
