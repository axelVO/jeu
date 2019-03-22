$(document).ready(function () {
    // for (let n = 1; n <= 9; n++) {
    //     $("#case" + n).click(function () {
    //         $(this).text("X");
    //     });
    // }

    if ($("input[name=player1]").val() == "") {
        $("input[name=player1]").val("Joueur 1").css("color", "rgba(50, 50, 50, 0.6)");
    }

    if ($("input[name=player2]").val() == "") {
        $("input[name=player2]").val("Joueur 2").css("color", "rgba(50, 50, 50, 0.6)");
    }

    $("input[name=player1], input[name=player2]").focus(function () {
        $(this).val("");
    })

    let playerData = new Array();

    for (let n = 1; n <= 2; n++) { // Enregistre et fait disparaitre les inputs
        $("input[name=player" + n + "]").keypress(function (event) {
            if (event.which == "13") { // Touche ENTER
                $(this).hide();
                if ($(this).val() != "") {
                    playerData.push($(this).val());
                }

                else {
                    playerData.push("Joueur " + n);
                }

                // Enlever le commentaire pour tester la sortie :
                // $(".test").text(playerData.join(", ")); 

                if (playerData.length == "2") {
                    let resolu = false;

                    // A FINIR : FAIRE LA LOGIQUE JOUEUR1/JOUEUR2 + FAIRE LA LOGIQUE VICTOIRE/DEFAITE + FAIRE LA LOGIQUE RE-INIT
                    // while (!resolu){

                    //     $(".start").text(playerData[0] + " à votre tour");
                    // }
                    
                }
            }
        })
    }

    



});
