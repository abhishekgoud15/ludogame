   var count=0;
   var res=0;
   var res1=0;
   
   let letsplay =  () => {
     if(count<5)
     {
     
  count++;
  let play1 = Math.floor(Math.random() * 6+1);
  let play1dice = `<img src="images/dice-${play1}.svg">`;
  document.getElementById("dice1").innerHTML = play1dice;

  let play2 = Math.floor(Math.random() * 6+1);

  let play2dice = `<img src="images/dice-${play2}.svg">`;
  document.getElementById("dice2").innerHTML = play2dice;

  let imag = `<img src="images/emoji.gif" class="animation">player one won! score`;
  let imag1 = `<img src="images/emoji.gif" class="animation">player second won! score`;
  let imag2 = `<img src="images/emoji.gif" class="animation"> draw!!!`;

  // if (play1 > play2) {
  //   document.getElementById("one").innerHTML = imag;
  // } else if (play1 < play2) {

  //   document.getElementById("one").innerHTML = imag1;
  // } else {
  //   document.getElementById("one").innerHTML = imag2;
    
  // }

   res=play1+res;
   console.log( "player1",res);
   res1=play2+res1;
   console.log("player 2",res1);
   document.getElementById("score").innerHTML+=play1+' ';
   document.getElementById("score2").innerHTML+=play2+' ';
  if(count==5){
    
   
    //  document.getElementById("score").innerHTML+=res;
    //  document.getElementById("score2").innerHTML+=res1;
     if(res>res1 )
   {
  
     document.getElementById("one").innerHTML=imag+res;
   }
    if (res==res1)
     {
      document.getElementById("one").innerHTML=imag2+res;
     }
    if(res<res1)
   {
     document.getElementById("one").innerHTML=imag1+res1;
   }
    
  }
  
  

}
else
{
    document.getElementById("one").innerHTML=`gameover startnew game`
  
      }
} 
  

