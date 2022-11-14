const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? (Nicknames are also acceptable) ', (answer1) => {
  console.log(`Hi ${answer1}`);
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(`So you are into ${answer2}`);
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
      console.log(`I like ${answer3} too`);
      rl.question('What\'s your favourite thing to eat for that meal? ', (answer4) => {
        console.log(`${answer4} sounds good`);
        rl.question('Which sport is your absolute favourite? ', (answer5) => {
          console.log(`${answer5}!!!  You wanker`);
          rl.question('What was the last event you attended ', (answer6) => {
            console.log(`${answer6} huh, that sounds cool`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`I wonder how ${answer7} would fare against my laser eyes`);
              console.log(`${answer1} is a genuine human bean.  They like to ${answer2}.  They prefer to eat ${answer4} at ${answer3}.  They like to watch and play ${answer5}.  The last cool thing they went to was ${answer6}.  They are good at ${answer7}.`)
              rl.close();
            })
          })
        })
      })
    })
  })
})  
    
      
      
        
        
          
            
          
 




/*
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/