
const fs = require('fs')
  
 fs.readFile('wordle.txt', (err, data) => {
    if (err) throw err;
  
    let normData = data.toString();
    let answerArr = normData.split(`\n`)
    
    
   
})


