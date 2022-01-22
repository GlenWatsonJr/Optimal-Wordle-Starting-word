
const fs = require('fs')
  
 fs.readFile('wordle.txt', (err, data) => {
    if (err) throw err;
  
    // reading the data from the wordle answer kist text file and saving it as an array.
    let normData = data.toString();
    let answerArr = normData.split(`\n`)

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

    //outputting the array for test purposes.
   console.log(sortableLetters);
})


