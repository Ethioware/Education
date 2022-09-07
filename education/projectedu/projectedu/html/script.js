var time = document.querySelector('#time');
var date = new Date();
var datenum = date.getDate();
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var daycount = ['Mon', 'Tue', 'Wed' , 'Thu' , 'Fri' , 'Sat' , 'Sun'];
var dayName = daycount[day]
var monthcount = ['Jan', 'Feb' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'Sept' , 'Oct' , 'Nov' , 'Dec']
var monthName = monthcount[month]
var cont = `${dayName}, ${monthName} ${datenum}, ${hour} : ${minute} :${second}`
time.innerHTML = cont


var x = document.querySelector('#searchText') ;
x.addEventListener('change', () => {
    var y = document.querySelector('#searchText').value
    if(y === 'maths' || y === 'Maths' || y == 'Mathematics' || y === 'mathematics'){
        window.open ('../quiz/maths/index1.html', '_self')
    }
    else if(y === 'chemistry' || y === 'Chemistry' || y === 'chemi' || y ==='Chemi'){
        window.open ('../quiz/chemi/index2.html','_self')
    }
    else if(y === 'Biology' || y === 'Bio' || y === 'biology' || y ==='bio'){
        window.open ('../quiz/Bio/index3.html', '_self')
    }
    // else {
    //     alert (`There is no file called '${y}' `  )
    // }
})
       



var btn = document.querySelector('#voice');
var content = document.querySelector('#searchText');

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition ; 

const recognition = new speechRecognition();
recognition.interimResults = true;

recognition.onstart = function() {
      console.log ('started')
}
recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript
    content.value = transcript;
    // console.log(transcript)
    if(transcript.includes('open biology exercise') || transcript.includes('biology exercise') ||  transcript.includes('biology')){
        window.open('../quiz/Bio/index3.html')
    }

    if(transcript.includes('open chemistry exercise') ||  transcript.includes('chemistry exercise') )
    if(transcript.includes('open chemistry exercise') ||  transcript.includes('chemistry exercise') || transcript.includes('chemistry')){
        window.open('../quiz/chemi/index2.html')
    }
    if(transcript.includes('open math exercise') || transcript.includes('math exercise') || transcript.includes('mathematics')){
        window.open('../quiz/maths/index1.html')
    }
    if(transcript.includes('out')){
        window.close('../html/homepage.html')
    }
    read(transcript);
}


btn.addEventListener('click', () => {
    recognition.start()
})
function read(message) {
    var speech = new SpeechSynthesisUtterance();
    if(message.includes('hate')){
        speech.text = 'get out of here, you peace of shit'; 
    
    }
    if(message.includes('love')){
        speech.text = 'love you too my baby , i am coming for you'; 
    
    }
    if(message.includes('antenna')){
        speech.text = 'he is a teacher in a company called hypertext and rumor has it that he is addicted to recording our meetings, typical Anteneh'; 
    
    }
    speech.rate = 1
    speech.volume = 1;
    speech.pitch = 1;


    window.speechSynthesis.speak(speech)
}