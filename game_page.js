var player1_name = localStorage.getItem("playerOneName");
console.log(player1_name);
var player2_name = localStorage.getItem("playerTwoName");
console.log(player2_name);

var player1_score = 0;
var player2_score = 0;

var question_turn = "player1"
var answer_turn = "player2"

a = 2
b = 5

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word lowercase = " + word);

    wordLength = word.length;
    console.log("word length = " + wordLength);

    wordLengthMO = wordLength - 1;
    console.log("word length MO = " + wordLengthMO);

    if (wordLength < 4 || wordLength > 7) {
        if (wordLength < 4){
            console.log("toosmall");
            document.getElementById("sendBtn").textContent = "Too small"
        }
        else if (wordLength > 7){
            console.log("toobig");
            document.getElementById("sendBtn").textContent = "Too big"
        }

    }
    else{
    document.getElementById("sendBtn").textContent = "Sent"

    letter1 = Math.floor(Math.random() * 4);
    letter2 = Math.floor(Math.random() * wordLength);
    letter3 = Math.floor(Math.random() * wordLengthMO);
    letter4 = Math.floor(Math.random() * 4);

    console.log("letter1 = " + letter1)
    console.log("letter2 = " + letter2)
    console.log("letter3 = " + letter3)
    console.log("letter4 = " + letter4)

    charAt1 = word.charAt(letter1);
    console.log(charAt1);

    charAt2 = word.charAt(letter2);
    console.log(charAt2);

    charAt3 = word.charAt(letter3);
    console.log(charAt3);

    charAt4 = word.charAt(letter4);
    console.log(charAt4);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    removeCharAt4 = removeCharAt3.replace(charAt4, "_");
    console.log(removeCharAt4);

    question_word = "<h4 id='word_display'> Q. "+removeCharAt4+"</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

    
    }

    

}

function check(){
     get_answer = document.getElementById("input_check_box").value;
     answer = get_answer.toLowerCase();
     console.log("answer LC = " + answer);   

     if(answer == word)
     {

        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else 
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score   
        }

        if(question_turn == "player1")
        {
            question_turn = "player2";
            document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name

            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name
        }
        else
        {
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "Question Turn -" + player2_name

            question_turn = "player1";
            document.getElementById("player_question").innerHTML = "Answer Turn -" + player1_name   
        }

     }
     else{
        if(answer_turn == "player1")
        {
            player1_score = player1_score - 1;
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else 
        {
            player2_score = player2_score - 1;
            document.getElementById("player2_score").innerHTML = player2_score   
        }
     }
    document.getElementById("output").innerHTML = "";
    }