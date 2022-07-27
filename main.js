let button = document.querySelector(".generator");
button.addEventListener("click", change);

let textareaMatch = document.getElementById("match_box");
let textareaphrase = document.getElementById("phrase_box");

let btnCopyMatch = document.querySelector(".copy-exact-match");
btnCopyMatch.addEventListener("click", copymatch);


let btnCopyPhrase = document.querySelector(".copy-phrase-match")
btnCopyPhrase.addEventListener("click", copyphrase);



function change(){
   
    let boardMatch = document.getElementById("board_match").value.replace(/\r\n/g,"\n").split("\n").filter(element => { return element !== '';});         


    let phrases = [...boardMatch];

    phrases.forEach((element, index) => {
        phrases[index] =`"${element}"`;
    });


    textareaphrase.value = phrases.join("\n");
    

    
    let exactMatch = [...boardMatch];

    exactMatch.forEach((element, index) => {
        exactMatch[index] = "[" +element+ "]";
    });

    textareaMatch.value = exactMatch.join("\n");
}


function copyphrase(){
    console.log('clik')
    textareaphrase.select();
    navigator.clipboard.writeText(textareaphrase.value);
    alert("Copied all phrase matches")
}


function copymatch(){
    console.log('clik2')
    textareaMatch.select();
    navigator.clipboard.writeText(textareaMatch.value);
    alert("Copied all exact matches")
}


