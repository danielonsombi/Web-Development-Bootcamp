$("h1").css("color", "red");

$("button").html("<em>Hell yeah</em>")

console.log($("a").attr("href"));

$("a").attr("href","https://www.yahoo.com");

$("h1").click(function() {
    $("h1").css("color", "purple")
});


// for(var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

//Above can be done in JS as:
$("button").click(function() {
    $("h1").css("color", "purple")
})

//Key Press:
$("input").keypress(function(event) {
    $("h1").text(event.key)
    //console.log(event.key);
})

//Mouse over:
$(document).on("mouseover", function(){
    $("h1").css("color", "green")
})

$("h1").before("<button>New</button>");

// $("button").on("click", function(){
//     $("h1").slideToggle();
// })

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})

