var l=document.querySelectorAll(".drum").length;
for( var i=0; i<l ;i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function (){
    makesound(this.innerHTML);
    buttonAnimation(this.innerHTML);
    });
}
document.addEventListener("keydown",function (event){
 makesound(event.key);
 buttonAnimation(event.key)
});

function makesound(button){
    switch (button){
        case "w":
         var audio=new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
        case "a":
          var audio=new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio=new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio=new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio=new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "k":
          var audio=new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "l":
          var audio=new Audio("sounds/snare.mp3");
          audio.play();
          break;
        default: console.log(button);
      }
}
function buttonAnimation(key){
    document.querySelector('.'+key).classList.add("pressed");
    setTimeout(function (){document.querySelector('.'+key).classList.remove("pressed"); },700);
}
