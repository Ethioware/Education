//selected queries
var quiz = document.querySelector('#quiz')
var header = document.querySelector('#header')
var answerA = document.querySelector('#optionA')
var answerB = document.querySelector('#optionB')
var answerC = document.querySelector('#optionC')
var answerD = document.querySelector('#optionD')
var bioStartButton = document.querySelector('#bioStartButton')
var links = document.querySelector('#links')
var button=document.querySelector('#button')
var logo=document.querySelector('.logo')
const qn1Button = document.querySelector('#qn1Button')
const qn2Button = document.querySelector('#qn2Button')
const qn3Button = document.querySelector('#qn3Button')
// const  = document.querySelector('#')
const score = document.querySelector('#score')

//selected queries

// declared vars
header.innerHTML = "Choose a subject"
var qnchoice = "";
let Score = 0;
var i=0

// declared vars


// question and choice lists
var questionList = [
    ' Qn1: Skin is respiratory organ in ?',
    'Qn2: Largest sperms in the world are found in ?',
    'Qn3:  ADH is stored in ?',

]
optionA = ['Lizard','Pinus','Posterior pituitary']
optionB = ['Frog','Cycus','Anterior pituitary']
optionC = ['Birds','Banyan','Kidney']
optionD = ['Primitive mammals','Tsuja','Hypothalamus']

// question and choice lists

qn1Button.style.display = "none"
qn2Button.style.display = "none"
qn3Button.style.display = "none"
links.style.marginTop = "50px"
score.style.display = "none"
// logo.style.display = 'none'

// ********************functions*******************

                    function qn1(){
                        header.style.display = 'none'
                        quiz.style.display = 'block'
                        score.style.display = 'block'
                        score.innerHTML = Score
                        question.innerHTML = questionList[i]
                        qn1Button.style.display = "block"
                        answerA.innerHTML='A. ' + optionA[i]
                        answerB.innerHTML='B. ' + optionB[i]
                        answerC.innerHTML='C. ' + optionC[i]
                        answerD.innerHTML='D. ' + optionD[i]
                        bioStartButton.style.display = 'none'
                        links.style.display = 'none'
                        



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
                        if(qnchoice == 'b') {
                            Score += 100 ;
                            alert('correct') 
                        } else {
                            alert('incorrect ')
                        }
                        score.style.display = 'block'
                        score.innerHTML = Score

                        i += 1;
                        bioStartButton.style.display = 'none'
                        links.style.display = 'none'
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
                        if(qnchoice === 'b') {
                            Score += 100
                            if (Score === 200) {
                                alert('You are truely son of albert einstien')
                            }
                            else{
                                alert('Correct')
                            }

                        }else {
                           alert ('incorrect')
                        }
                        score.style.display = 'block'
                        score.innerHTML = Score
                        
                        bioStartButton.style.display = 'none'
                        links.style.display = 'none'
                        qn3Button.style.display = "block"
                    
                        qn2Button.style.display = "none"
                        answerA.style.color = 'floralwhite'
                        answerB.style.color = 'floralwhite'
                        answerC.style.color = 'floralwhite'
                        answerD.style.color = 'floralwhite'
                        i += 1;
                        question.innerHTML = questionList[i]
                        question.style.marginLeft = '200px' 
                        answerA.innerHTML = 'A. ' + optionA[i]
                        answerB.innerHTML = 'B. ' + optionB[i]
                        answerC.innerHTML = "C. " + optionC[i]
                        answerD.innerHTML = "D. " + optionD[i]
                        
                    }
                    function qn3Submit(){
                    
                        if(qnchoice === 'd') {
                            Score += 100
                            if(Score === 300) {
                                alert('I call you, Mr.Biology! \n Respect Granted !!!')
                            }else{
                                alert('correct')
                            }
                        
                        }else {
                            alert('incorrect')
                        }
                        
                        links.style.display = 'none'
                        score.style.display = 'none'
                        bioStartButton.style.display = 'none'
                        qn3Button.style.display = "none"
                        quiz.style.display = 'none'
                        header.innerHTML= `Score : ${Score}`
                        header.style.display = 'block'
                        
                    } 
                    // function function() {
                    //     // header.style.display = 'block'
                    //     // header.innerHTML = 'Choose subject'
                    //     // links.style.display = 'block'
                    //     // .style.display = 'none'
                    //     // qn1Button.style.display = 'none'
                    //     // bioStartButton.style.display = 'block'
                    //     window.open ('../html/homepage.html')
                    //     bioStartButton.style.marginLeft = '600px'
                    //     // question.style.display ='none'
                    //     // score.style.display ='none'
                    //     // answerA.style.display ='none'
                    //     // answerB.style.display ='none'
                    //     // answerC.style.display ='none'
                    //     // answerD.style.display ='none'
                       
                    // }
                    // submits