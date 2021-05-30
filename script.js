$(document).ready(function () { 

    $('form').keydown(function (e) {
        if (e.keyCode == 13) { // when click Enter key
            e.preventDefault();
            return false;
        }
    });

    $(".arrow").click(() => { 
        let inputValue =  $("input").val()
        let Regexr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        let result = Regexr.test(inputValue);

        if ( result == false ) { 
            $("small").css("display", "block")
            $(".error img").css("display", "block")
            $("input").css('border', '2px solid red')            
        }else { 
            $("small").css("display", "none")
            $(".error img").css("display", "none")
            $("input").css('border', '1px solid hsl(0, 36%, 70%)')            
        }
    })

})
