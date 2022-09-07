//selected queries
var quiz = document.querySelector('#quiz')
var header = document.querySelector('#header')
var answerA = document.querySelector('#optionA')
var answerB = document.querySelector('#optionB')
var answerC = document.querySelector('#optionC')
var answerD = document.querySelector('#optionD')
var chemiStartButton = document.querySelector('#chemiStartButton')
var links = document.querySelector('#links')
var score = document.querySelector('#score')
var homeButton=document.querySelector('#homeButton')
const qn1Button = document.querySelector('#qn1Button')
const qn2Button = document.querySelector('#qn2Button')
const qn3Button = document.querySelector('#qn3Button')
//selected queries

// declared vars
header.innerHTML = "Choose a subject"
var qnchoice = "";
let Score = 0;
var i=0

// declared vars


// question and choice lists
var questionList = [
    ' Qn1: The chemical symbol for the element symbol ?',
    'Qn2: Distillation is used in the process of preparation ? ',
    'Qn3: Which one of the is not pure ? ',

]
optionA = ['Si','Coffee','Metal']
optionB = ['S','Tella','Acid']
optionC = ['Na','Areke','Base']
optionD = ['Ag','Honey','Salt solution']


// question and choice lists

qn1Button.style.display = "none"
qn2Button.style.display = "none"
qn3Button.style.display = "none"
score.style.display = "none"
homeButton.style.display = "none"


// ********************functions*******************

                    function qn1(){
                        header.style.display = 'none'
                        quiz.style.display = 'block'
                        question.innerHTML = questionList[i]
                        qn1Button.style.display = "block"
                        answerA.innerHTML='A. ' + optionA[i]
                        answerB.innerHTML='B. ' + optionB[i]
                        answerC.innerHTML='C. ' + optionC[i]
                        answerD.innerHTML='D. ' + optionD[i]
                        chemiStartButton.style.display = 'none'
                        links.style.display = 'none'
                        score.style.display = 'block'
                        score.innerHTML = Score

                        


                    }

                    // colors
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
                    // colors


                    // submits
                    function qn1Submit(){
                        header.style.display = 'none'
                        if(qnchoice == 'd') {
                            Score = Score + 100 ;
                            alert('correct') 
                        } else {
                            alert('incorrect ')
                        }

                        i += 1;
                        chemiStartButton.style.display = 'none'
                        links.style.display = 'none'
                        score.style.display = 'block'
                        score.innerHTML = Score
                        question.innerHTML= questionList[i]
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
                        if(qnchoice === 'c') {
                            Score += 100
                            if (Score === 200) {
                                alert('You are truely son of albert einstien')
                            }
                            else{
                                alert('Correct')
                            }

                        }else ('incorrect')
                        chemiStartButton.style.display = 'none'
                        links.style.display = 'none'
                        score.style.display = 'block'
                        score.innerHTML = Score
                        qn3Button.style.display = "block"
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
                    
                        if(qnchoice === 'd') {
                            Score += 100
                            if(Score == 300) {
                                alert('I call you, Mr.Chemistry! \n Respect Granted !!!')
                            }else{
                                alert('correct')
                            }
                        
                        }else {
                            alert('incorrect')
                        }
                        links.style.display = 'none'
                        score.style.display = 'none'
                        chemiStartButton.style.display = 'none'
                        qn3Button.style.display = "none"
                        quiz.style.display = 'none'
                        header.innerHTML= `Score : ${Score}`
                        header.style.display = 'block'
                        homeButton.style.display = 'block'
                    }
                    function homeButtonfunction() {
                        header.style.display = 'block'
                        header.innerHTML = 'Choose subject'
                        links.style.display = 'block'
                        homeButton.style.display = 'none'
                        chemiStartButton.style.display = 'block'
                        chemiStartButton.style.marginLeft = '600px'

                       
                    }
                    // submits