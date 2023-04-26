//User Interface Logic
$(document).ready(function() {
    // Search form and result
    $("#formOne").submit(function (event){
        const animal = $("input#animal-name").val().toUpperCase();

        if (animal === "LION") {
            $("#LION-INFO").show();
            $("#BEAR-INFO").hide();
            $("#PENGUIN-INFO").hide();
            $(".unavailable").hide();
            $(".moreOne").hide();
            $(".moreTwo").hide();
            $(".moreThree").hide();
        } else if (animal === "BEAR") {
            $("#BEAR-INFO").show();
            $("#LION-INFO").hide();
            $("#PENGUIN-INFO").hide();
            $(".unavailable").hide();
            $(".moreOne").hide();
            $(".moreTwo").hide();
            $(".moreThree").hide();
        } else if (animal === "PENGUIN") {
            $("#PENGUIN-INFO").show();
            $("#LION-INFO").hide();
            $("#BEAR-INFO").hide();
            $(".unavailable").hide();
            $(".moreOne").hide();
            $(".moreTwo").hide();
            $(".moreThree").hide();
        } else {
            $(".unavailable").show();
            $("#LION-INFO").hide();
            $("#BEAR-INFO").hide();
            $("#PENGUIN-INFO").hide();
            $(".moreOne").hide();
            $(".moreTwo").hide();
            $(".moreThree").hide();
        }

        event.preventDefault();
    });
 
    // Animal Buttons
    $(".clickable").click(function(){
        $(".moreOne").show(1000);
        $("#BEAR-INFO").hide();
        $("#PENGUIN-INFO").hide();
        $(".unavailable").hide();
       
    })

    $("#green").click(function(){
        $("#LION-INFO").show();
        $(".moreOne").hide();
        $("#BEAR-INFO").hide();
        $("#PENGUIN-INFO").hide();
        $(".unavailable").hide();
    });

    $(".clickableOne").click(function(){
        $(".moreTwo").show(1000);
        $("#LION-INFO").hide();
        $("#PENGUIN-INFO").hide();
        $(".unavailable").hide();
       
    })

    $("#red").click(function(){
        $("#BEAR-INFO").show();
        $(".moreTwo").hide();
        $("#LION-INFO").hide();
        $("#PENGUIN-INFO").hide();
        $(".unavailable").hide();
    });

    $(".clickableTwo").click(function(){
        $(".moreThree").show(1000);
        $("#LION-INFO").hide();
        $("#BEAR-INFO").hide();
        $(".unavailable").hide();
       
    })

    $("#yellow").click(function(){
        $("#PENGUIN-INFO").show();
        $(".moreThree").hide();
        $("#LION-INFO").hide();
        $("#BEAR-INFO").hide();
        $(".unavailable").hide();
    });
});