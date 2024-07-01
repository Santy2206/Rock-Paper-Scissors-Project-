
let computerwordchoose
let humanwordchoose
let numeric_answer
let winner
let random
let computerScore=0;
let humanScore=0;
// Write The Logic To Get The Computer Choice 
  // Make A Function Named getComputer Choice 
    function getComputerChoice(){
      // Write The Code So Will Randomly Return One Of The Options
        // Create A Variable That Create A Random Number Between 0,1 or 2  
          random=Math.floor(Math.random()*(2-0+1))
        // Give The Values To Each Number To The Game Options 
          switch(random){
            case 0:
              computerwordchoose="ROCK"
              break;
            case 1:
              computerwordchoose="PAPER"
              break;
            case 2:
              computerwordchoose="SCISSORS"
              break;
                      }
        // Return The Computer Choice 
     
          return random
          
      

    

      
    
    }
// Write The Logic To Get The Computer Choice
  // Create A New Function Named getHumanChoice. 
    function getHumanChoice(){

      // Make Return One Of The Valid Options 
      let answer_Lower=prompt("Rock Paper Or Scissors? ") 
        //Make Your Function’s HumanChoice Parameter Case-Insensitive
          function answer_Upper(){
          return humanwordchoose= answer_Lower.toUpperCase()
          }
        //Turn The Human Option To Number 

          switch (answer_Upper()) {
            case "ROCK":
              return numeric_answer=0
              break;
            case "PAPER":
              return numeric_answer=1
              break;
            case "SCISSORS":
              return numeric_answer=2
              break;
            default :
              return `You Write ${answer_Lower} Try It Again Bro!!`
          }
  
    } 
// Write The Logic To Play A Single Round
  // Create A New Function Named playRound.  
    function playRound(){
    
  
    getComputerChoice()
    getHumanChoice()
    //Show The Answer Of Each Player In The Console
      console.log(`COMPUTER CHOOSE ${computerwordchoose}`)
      console.log(`YOU CHOOSE ${humanwordchoose}`)
    //Create A Function That Calculate The Values Who Wins
      if(random>numeric_answer){

      winner=("COMPUTER'S WINS!!")
      }
      else if (random<numeric_answer){
      winner=("HUMAN'S WINS!!")
      }
      else if (random==2&&numeric_answer==0){
      winner=("HUMAN'S WINS!!")
      }
      else if (random===numeric_answer){
      winner=("EQUAL!!")
      }
      else{
      winner=("COMPUTER'S WINS!!")
      }
    //Show The Winner 
      console.log(winner)

    // Add 1 To Each Score To The Winner
    if (winner=="COMPUTER'S WINS!!"){
    computerScore++;

    }
    else if (winner=="HUMAN'S WINS!!"){
    humanScore++;
    }

    // Show The Scores  
      console.log(`Human's Score It's${humanScore}`,`Computer's Score It's${computerScore}`) 


    }
// Write The Logic To Play All The Game   
//Create A New Function Named playGame. 
  function playGame(){
    //Move your playRound function and score variables so that they’re declared inside of the new playGame function
    //Play 5 Rounds By Calling PlayRound 5 Times.
      for (let i=1;i<5;i++){
        playRound()
       }
    
  }
 
  console.log(playGame())
  


  