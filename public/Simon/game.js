var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []

var level = 0

function nextSequence (){
    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
    level++
    $("h1").text("Level " + level)
}

$(".btn").click(function(e){
    var userChosenColor = e.target.id
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1)
})

function playSound(name){
    switch (name) {
        case "red":
            var audio = new Audio("./sounds/red.mp3")
            audio.play()
            break;
            case "blue":
            var audio = new Audio("./sounds/blue.mp3")
            audio.play()
            break;
            case "green":
            var audio = new Audio("./sounds/green.mp3")
            audio.play()
            break;
            case "yellow":
            var audio = new Audio("./sounds/yellow.mp3")
            audio.play()
            break;
            case "wrong":
                var audio = new Audio("./sounds/wrong.mp3")
                audio.play()
                break;
        
    
        default:
            break;
    }
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    },100)
}

$( document).on( "keydown", function() {
    nextSequence();
    $("h1").text("Level " + level)
  } )



function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function(){
                nextSequence()
            },1000)
            userClickedPattern = []
        } 

    }else{
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")          
        },200)
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}

function startOver(){
    level = 0;
    gamePattern = []
    userClickedPattern = []
}