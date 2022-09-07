
// selected queries
var quiz = document.querySelector('#quiz');
var header = document.querySelector('#header');
const qn1Button = document.querySelector('#qn1Button');
const qn2Button = document.querySelector('#qn2Button');
const qn3Button = document.querySelector('#qn3Button');
const qn4Button = document.querySelector('#qn4Button');
var answerA = document.querySelector('#optionA');
var answerB = document.querySelector('#optionB');
var answerC = document.querySelector('#optionC');
var answerD = document.querySelector('#optionD');
var button=document.querySelector('#button');
var mathsStartButton = document.querySelector('#mathsStartButton');
var links = document.querySelector('#links');
var score = document.querySelector('#score');
var homeButton = document.querySelector('#homeButton');

// selected queries


// question and choice lits
var questionList = [
    ' Qn1: Which number is equivalent to 3^(4)÷3^(2)',
    'Qn2: I am an odd number. Take away one letter and I become even. What number am I?',
    'Qn3:  How many feet are in a mile? ',
    'Qn4:  2 + 2? '

]
optionA = ['3','9','6000 feet', '4']
optionB = ['10','17','5422 feet','6']
optionC = ['9','11','5280 feet','5']
optionD = ['5','7','7230 feet','7']

//question and choice lists

//declared vars
var i=0
var qnchoice = "";
let Score = 0;
//declared vars

qn1Button.style.display = "none"
qn2Button.style.display = "none"
qn3Button.style.display = "none"
qn4Button.style.display = "none"
score.style.display = "none"
// homeButton.style.display = "none"



// ******************functioncs******************

                function qn1(){
                    header.style.display = 'none'
                    quiz.style.display = 'block'
                    question.innerHTML = questionList[i]
                    qn1Button.style.display = "block"
                    qn1Button.style.marginTop = "px"
                    // homeButton.style.marginTop = "-400px"
                    answerA.innerHTML ='A. ' + optionA[i]
                    answerB.innerHTML ='B. ' + optionB[i]
                    answerC.innerHTML ='C. ' + optionC[i]
                    answerD.innerHTML ='D. ' + optionD[i]
                    mathsStartButton.style.display = 'none'
                    links.style.display = 'none'
                    score.style.display = 'block'
                    score.innerHTML = Score
                    homeButton.style.display = "block"

                }

                // choice colors
                function afunction() {
                    answerA.style.color = 'red'
                    answerB.style.color = 'lightgreen'
                    answerC.style.color = 'lightgreen'
                    answerD.style.color = 'lightgreen'
                    qnchoice = "a";
                }
                function bfunction() {
                    answerA.style.color = 'lightgreen'
                    answerB.style.color = 'red'
                    answerC.style.color = 'lightgreen'
                    answerD.style.color = 'lightgreen'
                    qnchoice = "b";
                }
                function cfunction() {
                    answerA.style.color = 'lightgreen'
                    answerB.style.color = 'lightgreen'
                    answerC.style.color = 'red'
                    answerD.style.color = 'lightgreen'
                    qnchoice = "c";
                }
                function dfunction() {
                    answerA.style.color = 'lightgreen'
                    answerB.style.color = 'lightgreen'
                    answerC.style.color = 'lightgreen'
                    answerD.style.color = 'red'
                    qnchoice = "d";
                }
                // choice colors


                // submit buttons
                function qn1Submit(){
                    header.style.display = 'none'
                    if(qnchoice !== ''){

                        if(qnchoice == 'c') {
                            Score += 100 ;
                            alert('correct') 
                        } else {
                            alert('incorrect  \n 81/9 = 9 ')
                        }

                    }
                    
                    i += 1;
                    mathsStartButton.style.display = 'none'
                    links.style.display = 'none'
                    score.style.display = 'block'
                    score.innerHTML = Score
                    question.innerHTML = questionList[i]
                    qn2Button.style.display = "block"
                    
                    qn1Button.style.display = "none"
                    answerA.style.color = 'white'
                    answerB.style.color = 'white'
                    answerC.style.color = 'white'
                    answerD.style.color = 'white'
                    answerA.innerHTML = 'A. ' + optionA[i]
                    answerB.innerHTML = 'B. ' + optionB[i]
                    answerC.innerHTML = "C. " + optionC[i]
                    answerD.innerHTML = "D. " + optionD[i]
                    
                }
                function qn2Submit(){
                    header.style.display = 'none'
                    if(qnchoice === 'd') {
                        Score += 100
                        if (Score === 200) {
                            alert('You are truely son of albert einstien')
                        }
                        else{
                            alert('Correct')
                        }

                    }else{
                    alert('incorrect \n Seven - S = even ' )
                    } 
                    mathsStartButton.style.display = 'none'
                    links.style.display = 'none'
                    score.style.display = 'block'
                    score.innerHTML = Score
                    qn3Button.style.display = "block"
                
                    qn3Button.style.marginLeft = '100px'
                    qn2Button.style.display = "none"
                    answerA.style.color = 'floralwhite'
                    answerB.style.color = 'floralwhite'
                    answerC.style.color = 'floralwhite'
                    answerD.style.color = 'floralwhite'
                    i += 1;
                    question.innerHTML = questionList[i]
                    answerA.innerHTML = 'A. ' + optionA[i]
                    answerB.innerHTML = 'B. ' + optionB[i]
                    answerC.innerHTML = "C. " + optionC[i]
                    answerD.innerHTML = "D. " + optionD[i]
                    
                }
                function qn3Submit(){
                    header.style.display = 'none'
                    if(qnchoice === 'c') {
                        Score += 100
                        if (Score === 200) {
                            alert('You are truely son of albert einstien')
                        }
                        else{
                            alert('Correct')
                        }

                    }else{
                    alert('incorrect ' )
                    } 

                    mathsStartButton.style.display = 'none'
                    links.style.display = 'none'
                    score.style.display = 'block'
                    score.innerHTML = Score
                    qn4Button.style.display = "block"
                
                    qn3Button.style.display = "none"
                    answerA.style.color = 'floralwhite'
                    answerB.style.color = 'floralwhite'
                    answerC.style.color = 'floralwhite'
                    answerD.style.color = 'floralwhite'
                    i += 1;
                    question.innerHTML = questionList[i]
                    answerA.innerHTML = 'A. ' + optionA[i]
                    answerB.innerHTML = 'B. ' + optionB[i]
                    answerC.innerHTML = "C. " + optionC[i]
                    answerD.innerHTML = "D. " + optionD[i]
                    
                }
                function qn4Submit(){
                
                    if(qnchoice === 'a') {
                        Score += 100
                        if(Score === 300) {
                            alert('I call you, Mr.Maths! \n Respect Granted !!!')
                        }else{
                            alert('correct')
                        }
                    }else {
                        alert('incorrect')
                    }
                    links.style.display = 'none'
                    score.style.display = 'none'
                    mathsStartButton.style.display = 'none'
                    qn4Button.style.display = "none"
                    quiz.style.display = 'none'
                    header.innerHTML = `Score : ${Score}`
                    header.style.display = 'block'
                    homeButton.style.display = 'block'
                }

                function homeButtonfunction() {
                    header.style.display = 'block'
                    header.innerHTML = 'Choose subject'
                    links.style.display = 'block'
                    homeButton.style.display = 'none'
                    qn1Button.style.display = 'none'
                    mathsStartButton.style.display = 'block'
                    mathsStartButton.style.marginLeft = '600px'
                   
                    question.style.display ='none'
                        score.style.display ='none'
                        answerA.style.display ='none'
                        answerB.style.display ='none'
                        answerC.style.display ='none'
                        answerD.style.display ='none'

                   
                }
                // submit buttons




