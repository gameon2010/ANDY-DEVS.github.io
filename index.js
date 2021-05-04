score = 0;
cross = true;
audiogo = new Audio('gameover.mp3');
audio = new Audio('music.mp3');
setTimeout(() => {
    audio.play()
    
}, 1000);
document.onkeydown = function name(e) {
    console.log("Key code is: ",e.keyCode)
    if(e.keyCode==38){
    xman = document.querySelector('.xman')
    xman.classList.add('animatexman')
    setTimeout(() => {
        xman.classList.remove('animatexman')
        
    }, 600);


  }



    if(e.keyCode==39){
    xman = document.querySelector('.xman')
    xmanx = parseInt(window.getComputedStyle(xman,null).getPropertyValue('left')); 
     xman.style.left = xmanx + 112 + "px";

  }
  if(e.keyCode==37){
    xman = document.querySelector('.xman')
    xmanx = parseInt(window.getComputedStyle(xman,null).getPropertyValue('left')); 
     xman.style.left = (xmanx +  -112) + "px";

  }
}

  setInterval(() => {
    xman = document.querySelector('.xman');
    GameOver = document.querySelector('.GameOver');
    obsatacle = document.querySelector('.obsatacle');
   
    xx = parseInt(window.getComputedStyle(xman,null).getPropertyValue('left'));
    xy = parseInt(window.getComputedStyle(xman,null).getPropertyValue('top'));
    
    ox = parseInt(window.getComputedStyle(obsatacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obsatacle,null).getPropertyValue('top')); 

    offsetX = Math.abs(xx-ox);
    offsetY = Math.abs(xy-oy);
console.log(offsetX, offsetY)
    if(offsetX< 73 && offsetY<52){
GameOver.style.visibility = 'visible';
obsatacle.classList.remove('obsatacleAni')
audiogo.play()
setTimeout(() => {
 audiogo.pause() 
 audio.pause()  
}, 1000);

}

else if(offsetX< 145 && cross){
    score+=1;
    updateScore(score);
cross = false;
setTimeout(() => {
    cross = true
}, 1000);
setTimeout(() => {
    aniDur = parseFloat(window.getComputedStyle(obsatacle,null).getPropertyValue('animation-duration')); 
    newDur = aniDur - 0.1;
    obsatacle.style.animationDuration = newDur + 's';
    
      
}, 500);



}


}, 100);
function updateScore(score){
    scoreCont.innerHTML = "Your Score" + score






}
