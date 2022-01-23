
const { count } = require('console');
const fs = require('fs')
  
 fs.readFile('wordle.txt', (err, data) => {
    if (err) throw err;
  
    // reading the data from the wordle answer kist text file and saving it as an array.
    let normData = data.toString();
    let answerArr = normData.split(`\n`)

    //The optimal word has 5 different letters, removing words with duplicate letters.

    let needsRemoval = [];
    for(let i = 0; i < answerArr.length; i++){
        if(answerArr[i].slice(1,5).includes(answerArr[i][0])){
            needsRemoval.push(answerArr[i]);
        }
        if((answerArr[i].slice(2,5).includes(answerArr[i][1])) || (answerArr[i][0] === answerArr[i][1])){
            needsRemoval.push(answerArr[i]);
        }
        if((answerArr[i].slice(0,2).includes(answerArr[i][2]))||(answerArr[i].slice(3,5).includes(answerArr[i][2]))){
            needsRemoval.push(answerArr[i]);
        }
        if((answerArr[i].slice(0,3).includes(answerArr[i][3])) || (answerArr[i][3] === answerArr[i][4])){
            needsRemoval.push(answerArr[i]);
        }
        if(answerArr[i].slice(0,4).includes(answerArr[i][5])){
            needsRemoval.push(answerArr[i]);
        }
        
    }
    //removing the duplicate words.
    for (let i = 0; i < needsRemoval.length; i++){
        answerArr.splice(answerArr.indexOf(needsRemoval[i]),1);
    }
   
    //creating an object that contain letter and how many times they appear in all the answers
    let letterVals = {
                        a:0, 
                        b:0, 
                        c:0, 
                        d:0, 
                        e:0,
                        f:0,
                        g:0,
                        h:0,
                        i:0,
                        j:0,
                        k:0,
                        l:0,
                        m:0,
                        n:0,
                        o:0,
                        p:0,
                        q:0,
                        r:0,
                        s:0,
                        t:0,
                        u:0,
                        v:0,
                        w:0,
                        x:0,
                        y:0,
                        z:0
                     }

    // going through each letter in the answer list array and counting them in the letter object                  
    for (let i = 0; i < answerArr.length; i++){
        for (let j = 0; j < 5; j++){
            switch (answerArr[i][j]) {
                case "a": letterVals.a += 1; break;
                case "b": letterVals.b += 1; break;
                case "c": letterVals.c += 1; break;
                case "d": letterVals.d += 1; break;
                case "e": letterVals.e += 1; break;
                case "f": letterVals.f += 1; break;
                case "g": letterVals.g += 1; break;
                case "h": letterVals.h += 1; break;
                case "i": letterVals.i += 1; break;
                case "j": letterVals.j += 1; break;
                case "k": letterVals.k += 1; break;
                case "l": letterVals.l += 1; break;
                case "m": letterVals.m += 1; break;
                case "n": letterVals.n += 1; break;
                case "o": letterVals.o += 1; break;
                case "p": letterVals.p += 1; break;
                case "q": letterVals.q += 1; break;
                case "r": letterVals.r += 1; break;
                case "s": letterVals.s += 1; break;
                case "t": letterVals.t += 1; break;
                case "u": letterVals.u += 1; break;
                case "v": letterVals.v += 1; break;
                case "w": letterVals.w += 1; break;
                case "x": letterVals.x += 1; break;
                case "y": letterVals.y += 1; break;
                case "z": letterVals.z += 1; break;
                default : console.log("error");
                        
             }
        }
    }

    //converting the object into an array so it can be sorted(I know I could have started with an array)
    let sortableLetters = [];
    for (var letter in letterVals) {
    sortableLetters.push([letter, letterVals[letter]]);
    }

    //sorting the array.
    sortableLetters.sort(function(a, b) {
    return b[1] - a[1];
    });

    //creating a scoring array with letters and points.
    let letterScore = sortableLetters;
    
    for (let i = 0; i < letterScore.length; i++){
        letterScore[i][1] = i;
    }
    //creating a word score array to find the optimal words
    let wordScore = [];
    let points = 0;
    let tempArr = [];
    for (let i = 0; i < answerArr.length; i++){
        points = 0
        let tempArr = [];
        for (let j = 0; j < 5; j++){
            switch (answerArr[i][j]){
                case letterScore[0][0]: points += letterScore[0][1]; break;
                case letterScore[1][0]: points += letterScore[1][1]; break;
                case letterScore[2][0]: points += letterScore[2][1]; break;
                case letterScore[3][0]: points += letterScore[3][1]; break;
                case letterScore[4][0]: points += letterScore[4][1]; break;
                case letterScore[5][0]: points += letterScore[5][1]; break;
                case letterScore[6][0]: points += letterScore[6][1]; break;
                case letterScore[7][0]: points += letterScore[7][1]; break;
                case letterScore[8][0]: points += letterScore[8][1]; break;
                case letterScore[9][0]: points += letterScore[9][1]; break;
                case letterScore[10][0]: points += letterScore[10][1]; break;
                case letterScore[11][0]: points += letterScore[11][1]; break;
                case letterScore[12][0]: points += letterScore[12][1]; break;
                case letterScore[13][0]: points += letterScore[13][1]; break;
                case letterScore[14][0]: points += letterScore[14][1]; break;
                case letterScore[15][0]: points += letterScore[15][1]; break;
                case letterScore[16][0]: points += letterScore[16][1]; break;
                case letterScore[17][0]: points += letterScore[17][1]; break;
                case letterScore[18][0]: points += letterScore[18][1]; break;
                case letterScore[19][0]: points += letterScore[19][1]; break;
                case letterScore[20][0]: points += letterScore[20][1]; break;
                case letterScore[21][0]: points += letterScore[21][1]; break;
                case letterScore[22][0]: points += letterScore[22][1]; break;
                case letterScore[23][0]: points += letterScore[23][1]; break;
                case letterScore[24][0]: points += letterScore[24][1]; break;
                case letterScore[25][0]: points += letterScore[25][1]; break;
            }
         
        }
        tempArr.push(answerArr[i]);
        tempArr.push(points);
        wordScore.push(tempArr);
    }

    //sorting the wordScore Array to find optimal word.
    wordScore.sort(function(a, b) {
        return a[1] - b[1];
        });


    //outputting the results
    let output1 = "";
    let output2 = "'" + letterScore[0][0] + "' '" + letterScore[1][0]  + "' '" + letterScore[2][0]+ "' '" + letterScore[3][0]+ "' '" + letterScore[4][0] + "'";
    let count = 1;
   for (let i = 0; i < 12; i++){
           output1 += " " + count + ". " + wordScore[i][0] + " ";
           count++;
   }
   console.log(`Wordle Optimal Starting Word: \n
The letters that show up the most in puzzles are: ${output2} \n
The most optimal word is: ${wordScore[0][0]} \n
The most optimal word with 3 vowels is: ${wordScore[2][0]} \n
The top optimal words are: ${output1}
                `);
})


